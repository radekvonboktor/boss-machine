const { deleteAllFromDatabase, createMeeting, addToDatabase } = require('../db.js');
const BaseController = require('./baseController.js');

/**
 * @class MeetingsController
 * @extends BaseController
 * @description Controller for handling CRUD operations on the "meetings" model.
 */
class MeetingsController extends BaseController {
    /**
     * Creates an instance of MeetingsController.
     * Initializes the controller with the "meetings" model.
     */
    constructor() {
        super('meetings');
    }

    /**
     * Creates a new meeting and adds it to the database.
     * @param {import('express').Request} req - Express request object.
     * @param {import('express').Response} res - Express response object.
     */
    create(req, res) {
        res.status(201).send(addToDatabase(this.model, createMeeting()));
    }

    /**
     * Deletes all meetings from the database.
     * @param {import('express').Request} req - Express request object.
     * @param {import('express').Response} res - Express response object.
     */
    delete(req, res) {
        deleteAllFromDatabase(this.model);
        res.sendStatus(204);
    }
}

module.exports = new MeetingsController();
