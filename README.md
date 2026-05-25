# Full Stack Kubernetes Deployment Project

## 👨‍💻 Author Information

### Noor Mohammad
- Email: noormohammad161996@gmail.com
- GitHub: https://github.com/noormohammad161996-cloud
- LinkedIn: https://www.linkedin.com/in/noor-mohammad-828669275/

---

# 📌 Project Overview

This project demonstrates deployment of a Full Stack Application on Kubernetes locally using Minikube.

The application contains:

- Flask Frontend
- Express.js Backend
- Docker Containers
- Kubernetes Deployments
- Kubernetes Services

The project was deployed successfully on a Minikube Kubernetes cluster.

---

# 📁 Project Structure

```bash
fullstack-k8s-app/
│
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── Dockerfile
│   ├── app.py
│   └── requirements.txt
│
├── k8s/
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   └── frontend-service.yaml
│
└── README.md



⚙️ Technologies Used

| Technology     | Purpose                  |
| -------------- | ------------------------ |
| Docker         | Containerization         |
| Kubernetes     | Container Orchestration  |
| Minikube       | Local Kubernetes Cluster |
| Flask          | Frontend Application     |
| Express.js     | Backend API              |
| Docker Desktop | Container Runtime        |
| kubectl        | Kubernetes CLI           |


🚀 Step 1: Install Docker
sudo apt install docker.io -y

Check Docker:

docker --version


🚀 Step 2: Install Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

sudo install minikube-linux-amd64 /usr/local/bin/minikube

Check Minikube:

minikube version

🚀 Step 3: Install kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s \
https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

chmod +x kubectl

sudo mv kubectl /usr/local/bin/

Check kubectl:

kubectl version --client


🚀 Step 4: Start Minikube Cluster
minikube start --driver=docker --force --memory=1600mb --cpus=2 --kubernetes-version=v1.28.3

Verify cluster:

kubectl get nodes

Expected Output:

NAME       STATUS   ROLES           AGE   VERSION
minikube   Ready    control-plane   XXm   v1.28.3


🚀 Step 5: Build Docker Images
Build Backend Image
docker build -t backend-app ./backend
Build Frontend Image
docker build -t frontend-app ./frontend

Check Images:

docker images

🚀 Step 6: Kubernetes Deployment Files
Backend Deployment

File: k8s/backend-deployment.yaml

Purpose:

Creates backend pods
Runs Express backend container
Backend Service

File: k8s/backend-service.yaml

Purpose:

Exposes backend internally inside cluster


Frontend Deployment

File: k8s/frontend-deployment.yaml

Purpose:

Creates frontend pods
Runs Flask frontend container
Frontend Service

File: k8s/frontend-service.yaml

Purpose:

Exposes frontend outside cluster using NodePort


🚀 Step 7: Apply Kubernetes Manifests
kubectl apply -f k8s/

Expected Output:

deployment.apps/backend-deployment created
service/backend-service created
deployment.apps/frontend-deployment created
service/frontend-service created


🚀 Step 8: Verify Running Pods
kubectl get pods

Example Output:

NAME                                   READY   STATUS    RESTARTS   AGE
backend-deployment-xxxx                1/1     Running   0          XXs
frontend-deployment-xxxx               1/1     Running   0          XXs


🚀 Step 9: Verify Services
kubectl get svc

Example Output:

NAME               TYPE        CLUSTER-IP      PORT(S)
backend-service    ClusterIP   10.xx.xx.xx     5000/TCP
frontend-service   NodePort    10.xx.xx.xx     3000:30007/TCP

backend-service    ClusterIP   10.xx.xx.xx     5000/TCP
frontend-service   NodePort    10.xx.xx.xx     3000:30007/TCP
🚀 Step 10: Verify Deployments
kubectl get deployments

Expected Output:

NAME                  READY   UP-TO-DATE   AVAILABLE
backend-deployment    1/1     1            1
frontend-deployment   1/1     1            1


🚀 Step 11: Access Application

Run:

minikube service frontend-service

Working URL Example:

http://127.0.0.1:36469

✅ Project Outcome

Successfully deployed a Full Stack Flask and Express Application on Kubernetes using Minikube locally.

The project demonstrates:

Docker containerization
Kubernetes deployments
Kubernetes services
Minikube local cluster setup
Application deployment and verification

🔗 GitHub Repository

https://github.com/noormohammad161996-cloud/fullstack-k8s-app

🌐 Application URL
http://127.0.0.1:36469

📌 Commands Summary
Start Minikube
minikube start --driver=docker
Apply Kubernetes Files
kubectl apply -f k8s/
Check Pods
kubectl get pods

Check Services
kubectl get svc
Check Deployments
kubectl get deployments
Open Frontend
minikube service frontend-service