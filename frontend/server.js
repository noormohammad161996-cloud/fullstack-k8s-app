const express = require("express");
const axios = require("axios");

const app = express();

const BACKEND_URL =
  process.env.BACKEND_URL || "http://backend-service:5000";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users`);

    const users = response.data;

    let html = "<h1>User List</h1><ul>";

    users.forEach((user) => {
      html += `<li>${user.name}</li>`;
    });

    html += "</ul>";

    res.send(html);
  } catch (error) {
    console.log(error.message);
    res.send("Error connecting to backend");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});