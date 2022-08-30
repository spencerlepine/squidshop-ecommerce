## Cypress End-to-end Tests

Start the docker containers, which runs the React app on `localhost:3000`
```
cd <rootDirOfProject>
docker-compose up --build
```

Run the crypress tests:
```sh
cd apps/__tests__
npm install
npm run test

# OR
node_modules/.bin/cypress open # open the dashboard
node_modules/.bin/cypress run # simply run the tests
```