const express = require('express');

const minionsRouter = express.Router();
const minionsController = require('../controllers/minionsController.js');
const paramsMiddleware = require('../middleware/paramsMiddleware.js');

minionsRouter.param('minionId', paramsMiddleware(minionsController.model));

minionsRouter.get('/', (req, res) => minionsController.getAll(req, res));
minionsRouter.post('/', (req, res) => minionsController.create(req, res));
minionsRouter.get('/:minionId', (req, res) => minionsController.getOne(req, res));
minionsRouter.put('/:minionId', (req, res) => minionsController.update(req, res));
minionsRouter.delete('/:minionId', (req, res) => minionsController.delete(req, res));

module.exports = minionsRouter; 