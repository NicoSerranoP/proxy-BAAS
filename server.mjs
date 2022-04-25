import Web3 from 'web3';
import helmet from 'helmet';
import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config'

const app = express();
app.use(express.json());
app.use(helmet());

let web3 = new Web3();

import * as lacchain from './controller/lacchain.mjs';

import routesLacchain from './routes/lacchain.mjs';
routesLacchain(app, web3, fetch, lacchain);


app.listen(process.env.PORT, () => {
    console.log('Express app on %d', process.env.PORT)
})