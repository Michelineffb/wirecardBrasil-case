import dotenv from 'dotenv';
import express from 'express';
import { AddressInfo } from 'net';
import { clientRouter } from './routes/clientRouter';
import { purchaseRouter } from './routes/purchaseRouter';

dotenv.config();

const app = express();

app.use(express.json());

app.use("/client", clientRouter);

app.use("/purchase", purchaseRouter);

const { PORT = 3003} = process.env

const server = app.listen(PORT, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });
