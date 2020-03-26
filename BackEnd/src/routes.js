const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');
const routes = express.Router();

const ongController = require('../src/controllers/OngController');
const incidentsController = require('../src/controllers/incidentController');
const profileController = require('../src/controllers/profileController');
const sessionController = require('../src/controllers/SessionController');

routes.get('/ongs', ongController.index);

routes.post('/ongs', ongController.create);

routes.post('/sessions', sessionController.create);


routes.post('/incidents', incidentsController.create);

routes.get('/incidents', incidentsController.index);

routes.get('/profile', profileController.index);

routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;