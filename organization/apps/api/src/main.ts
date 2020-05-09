import * as express from 'express';
import { ApiResponse, API_URL } from "@organization/api-interface"

const app = express();

app.get(API_URL, (req, res) => {
  res.send({ message: 'Welcome to api!' } as ApiResponse);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
