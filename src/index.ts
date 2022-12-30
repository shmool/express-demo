import express, { Request, Response } from 'express';
import cors from 'cors';
import { mockMessages } from './data/messages'

const app = express();

const users = [
  { id: '1', name: 'Ayalla' },
  { id: '2', name: 'Shmuela' }
];


app.use(cors());
app.use(express.json());

app.get('/foo/:id', (request: Request, response: Response) => {
  const id = request.params.id;
  const user = users.find((u) => u.id === id);
  console.log('Got Request!');
  response.send(JSON.stringify({ message: 'Hello World', user }));
});

app.get('/messages', (request: Request, response: Response) => {
  response.send(JSON.stringify(mockMessages));
});

app.get('/messages/:id', (request: Request, response: Response) => {
  response.send(JSON.stringify(mockMessages[+request.params.id]));
});

app.post('/new-message', (request: Request, response: Response) => {
  console.log(request.body);
  response.send();
});

app.listen(3003, '0.0.0.0', () => {
  console.log('Server is running');
});



