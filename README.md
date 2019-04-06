# BitDust Web e2e tests

> Running Cypress tests against Apache server via docker-compose

```
npm run build
npm run up
```

## Running outside of docker

> First make sure you are running BitDust engine and bitdust web interface on 'localhost:8080'

```
cd e2e
npm i
```
## To run using the Cypress GUI

```
npx cypress open
```

## To run just on command line
```
npx cypress run
```
