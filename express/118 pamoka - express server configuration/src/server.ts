import express from 'express';

const server = express();

server.get('/', (request, response) => {
  response.status(200).send('Atsakymas');
});

server.listen(1337, () => console.log(`Server is running on: http://localhost:1337/`));