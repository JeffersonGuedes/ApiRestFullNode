const express = require('express')
const routes = express.Router()

const TrasProductosCalopsitaController = require('../controllers/TrasProductosCalopsitaController');
const TrasProductosCalopsitaControllerId = require('../controllers/TrasProductosCalopsitaControllerId');
const createProduct = require('../controllers/CreateController');

routes.get('/calopsita', TrasProductosCalopsitaController);
routes.get('/calopsita/:id', TrasProductosCalopsitaControllerId);
routes.post('/calopsita', createProduct);

module.exports = routes;
