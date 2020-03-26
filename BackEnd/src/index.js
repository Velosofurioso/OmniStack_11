const express = require('express');

const routes = require('./routes'); // IMPORTA AS ROTAS CRIADAS NO ARQUIVO ROUTES
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);


app.listen(3333);// localhost:3333