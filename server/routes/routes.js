const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');
/**
 * @description Root Route
 * @method GET/
 */
route.get('/', services.homeRoutes);

route.get('/add_user', services.add_user);

route.get('/update_user', services.update_user);

route.get('/recherche', services.recherche);


//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);



module.exports = route;