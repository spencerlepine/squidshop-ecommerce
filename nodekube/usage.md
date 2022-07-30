# Startup
`minikube start`

# Updates
*If you make changes to yaml files, apply the changes:
```sh
eval $(minikube docker-env)
docker build -t gateway .
docker-compose up
kubectl apply -f nodekube/hello-world-deployment-def.yaml
kubectl apply -f nodekube/hello-world-service-def.yaml
```

# Get URL
```sh
minikube service --url helloworld-service # minikube service helloworld-service
# http://192.168.215.42:30001
```