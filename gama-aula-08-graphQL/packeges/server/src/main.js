import express from 'express';

const server = express();

server.get('/status', (_, response) => {
  response.send({
    status: 'Okay',
  });
});

server.post('/authenticate', express.json(), (request, response) => {
  console.log(
    'E-mail', request.body.email,
    'Senha', request.body.senha
  );
  response.send()
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
})