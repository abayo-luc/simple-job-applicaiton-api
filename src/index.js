import '@babel/polyfill';
import express from 'express';
import resources from './resources';
import { errors } from 'celebrate';
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/api', resources);
app.use('*', (_, res) =>
  res.json({
    message: 'API endpoint not found!',
  })
);
app.use(errors());
export default app;
