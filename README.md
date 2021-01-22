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

## Local Testing
```
websocat - ws-c:sh-c:"socat -v -x - tcp:localhost:8282" --ws-c-uri ws://localhost
```

## Cluster Testing
```
websocat - ws-c:sh-c:"socat -v -x - tcp:localhost:80" --ws-c-uri ws://localhost
```