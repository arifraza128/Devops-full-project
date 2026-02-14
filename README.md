End-to-End Cloud-Native Full Stack Web Application

Overview

This project showcases a complete cloud-native full stack web application built with modern DevOps practices. It features containerization, CI/CD automation, Kubernetes deployment, AWS container registry integration, and real-time monitoring. 
The aim of this project is to display a production-ready DevOps workflow from development to deployment and monitoring.

Key Features

I.	Full Stack Web Application (Frontend + Backend)
II.	Containerization using Docker
III.	CI/CD Pipeline with GitHub Actions
IV.	Kubernetes Deployment (Minikube / EKS)
V.	Image Storage in AWS ECR
VI.	Monitoring with Prometheus
VII.	Scalable & Cloud-Native Architecture




 	Architecture Diagram



Tech Stack

Category    -------  Technology   
Frontend    -------  Html,  css, js       
Backend    --------  Node.js / Express
Containerization -------  Docker
CI/CD              ---------   GitHub Actions    
Orchestration  ----------  Kubernetes
Container Registry  -------  AWS ECR           
Cloud Platform     -------   AWS EC2           
Monitoring     -------  Prometheus
Version Control     -------    Git & GitHub      


•	Project Structure
Developer → GitHub → GitHub Actions (CI/CD)
              ↓
        Build Docker Image
              ↓
        Push to AWS ECR
              ↓
      Kubernetes Deployment
              ↓
    Service Exposure (NodePort)
              ↓
        Prometheus Monitoring

cloud-native-app/

Frontend   --------  java Frontend
Backend    --------  Node.js Backend
Docker     --------  Dockerfiles
k8s        --------  Kubernetes Manifests
.github/workflows  --------  CI/CD Pipeline
Monitoring     --------  Prometheus Config
README.md   

	Prerequisites

Ensure you have the following installed:
Docker
Kubernetes (Minikube)
kubectl
AWS CLI
Git



 CI/CD Pipeline Workflow

1. Developer pushes code to GitHub
2. GitHub Actions triggers workflow
3. Docker image is built automatically
4. Image pushed to AWS ECR
5. Kubernetes pulls image and deploys
6. Prometheus monitors application metrics

Docker Build & Push

bash
docker build -t cloud-native-app .
docker tag cloud-native-app:latest <AWS_ECR_REPO_URL>
docker push <AWS_ECR_REPO_URL>


Kubernetes Deployment

bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl get pods
kubectl get svc

•	Monitoring with Prometheus

   Prometheus is configured to scrape Kubernetes metrics and monitor:
i.	Pod health
ii.	CPU & Memory usage
iii.	Application performance

Access Prometheus:

bash
kubectl port-forward svc/prometheus 9090:9090 -n monitoring

Then open: http://localhost:9090

•	Screenshots


	Environment Variables

Create a .env file:

PORT=5000
POSTGRL_URI=your_database_url
AWS_REGION=us-east-1
ECR_REPO=your_ecr_repo_url


Contributing

Contributions are welcome!
Fork the repo, create a branch, and submit a pull request.


License

This project is licensed under the MIT License.


Author

Arif Raza
🎓 B.Tech Cloud Computing Student
☁ Aspiring Cloud & DevOps Engineer
🔗 GitHub: https://github.com/arifraza128
🔗 LinkedIn: https://www.linkedin.com/in/arif-raza-496a89284/
