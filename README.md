# TESTING WEBSOCKETS
_This repo is for testing websockets in the cluster._

## Prereqs
Install socat
```
brew install socat
```

Install websocat
```
brew install websocat
```

Apply k8s manifests to deploy the app and service
```
kubectl apply -f k8s/ws-test.yaml
```

Apply the manifest for the VirtualService
```
kubectl apply -f k8s/vs-default.yaml
```

### Local Testing
```
websocat - ws-c:sh-c:"socat -v -x - tcp:localhost:8282" --ws-c-uri ws://localhost
```

### Cluster Testing (assumes you are using docker desktop with k8s enabled)
```
websocat - ws-c:sh-c:"socat -v -x - tcp:localhost:80" --ws-c-uri ws://localhost
```