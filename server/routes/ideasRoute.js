const express = require('express');

const ideasRouter = express.Router();
const ideasController = require('../controllers/ideasController.js');
const paramsMiddleware = require('../middleware/paramsMiddleware.js');
const checkMillionDollarIdea = require('../checkMillionDollarIdea.js');

/**
 * @module ideasRouter
 * @description Express router for handling ideas-related routes.
 */

/**
 * Middleware to handle `ideaId` parameter validation and preprocessing.
 * @param {string} ideaId - The ID parameter of the idea.
 */
ideasRouter.param('ideaId', paramsMiddleware(ideasController.model));
ideasRouter.use(`/:ideaId`, checkMillionDollarIdea());

/**
 * Route to get all ideas.
 * @route GET /api/ideas
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 */
ideasRouter.get('/', (req, res) => ideasController.getAll(req, res));

/**
 * Route to create a new idea.
 * @route POST /api/ideas
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 */
ideasRouter.post('/', (req, res) => ideasController.create(req, res));

/**
 * Route to get a specific idea by ID.
 * @route GET /api/ideas/:ideaId
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 */
ideasRouter.get('/:ideaId', (req, res) => ideasController.getOne(req, res));

/**
 * Route to update an existing idea.
 * @route PUT /api/ideas/:ideaId
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 */
ideasRouter.put('/:ideaId', (req, res) => ideasController.update(req, res));

/**
 * Route to delete an idea by ID.
 * @route DELETE /api/ideas/:ideaId
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 */
ideasRouter.delete('/:ideaId', (req, res) => ideasController.delete(req, res));

module.exports = ideasRouter;
