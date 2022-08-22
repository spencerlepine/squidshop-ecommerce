# Kubernetes Development Notes and Resources

## Using Minikube
Instead of running full K8s cluster in the cloud, you can simulate in on your local machine.


### Get Minikube up and running
```sh
# Start the cluster
minikube start
# Make life easier using shell config alias
alias kubectl="minikube kubectl --"
# Open the dashboard
minikube dashboard
```

### Deploy applications
```
kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.4
kubectl expose deployment hello-minikube --type=NodePort --port=8080
kubectl get services hello-minikube
minikube service hello-minikube
kubectl port-forward service/hello-minikube 7080:8080
```


## Using the React App
```sh
# minikube has been started and is using alias
cd apps/client
docker build -t spencerlepine/squidshop-client:33c30f8 .
docker push spencerlepine/squidshop-client:33c30f8
kubectl apply -f react.yml
kubectl get svc
kubectl get deployment
minikube service minikube-react-app # service name defined in K8s yaml file
```