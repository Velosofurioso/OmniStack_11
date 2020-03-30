const express = require('express');
const crypto = require('crypto');
const { celebrate,  Segments, Joi } = require('celebrate');

const connection = require('./database/connection');
const routes = express.Router();

const ongController = require('../src/controllers/OngController');
const incidentsController = require('../src/controllers/incidentController');
const profileController = require('../src/controllers/profileController');
const sessionController = require('../src/controllers/SessionController');

routes.get('/ongs', ongController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), ongController.create);

routes.post('/sessions', sessionController.create);


routes.post('/incidents', incidentsController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), incidentsController.index);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), profileController.index);



routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), incidentsController.delete);

module.exports = routes;