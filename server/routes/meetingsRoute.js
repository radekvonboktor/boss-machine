const express = require('express');

const meetingsRouter = express.Router();
const meetingsController = require('../controllers/meetingsController.js');

/**
 * @module meetingsRouter
 * @description Express router for handling meeting-related routes.
 */

/**
 * Route to get all meetings.
 * @route GET /api/meetings
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 */
meetingsRouter.get('/', (req, res) => meetingsController.getAll(req, res));

/**
 * Route to create a new meeting.
 * @route POST /api/meetings
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 */
meetingsRouter.post('/', (req, res) => meetingsController.create(req, res));

/**
 * Route to delete all meetings.
 * @route DELETE /api/meetings
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 */
meetingsRouter.delete('/', (req, res) => meetingsController.delete(req, res));

module.exports = meetingsRouter;
