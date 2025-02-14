const { 
    getAllFromDatabase, 
    addToDatabase, 
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('../db.js');

/**
 * @class BaseController
 * @description A generic controller for handling CRUD operations on a given model.
 */
class BaseController {
    /**
     * Creates an instance of BaseController.
     * @param {string} model - The name of the database model to operate on.
     */
    constructor(model) {
        this.model = model;
    }

    /**
     * Retrieves all records from the database for the specified model.
     * @param {import('express').Request} req - Express request object.
     * @param {import('express').Response} res - Express response object.
     */
    getAll(req, res) {
        res.send(getAllFromDatabase(this.model));
    }

    /**
     * Retrieves a single record from the database by its ID.
     * @param {import('express').Request} req - Express request object.
     * @param {import('express').Response} res - Express response object.
     */
    getOne(req, res) {
        res.send(getFromDatabaseById(this.model, req.dbId));
    }

    /**
     * Creates a new record in the database.
     * @param {import('express').Request} req - Express request object.
     * @param {import('express').Response} res - Express response object.
     */
    create(req, res) {
        res.status(201).send(addToDatabase(this.model, req.body));
    } 

    /**
     * Updates an existing record in the database.
     * @param {import('express').Request} req - Express request object.
     * @param {import('express').Response} res - Express response object.
     */
    update(req, res) { 
        res.send(updateInstanceInDatabase(this.model, req.body));
    }

    /**
     * Deletes a record from the database by its ID.
     * @param {import('express').Request} req - Express request object.
     * @param {import('express').Response} res - Express response object.
     */
    delete(req, res) {
        deleteFromDatabasebyId(this.model, req.dbId);
        res.sendStatus(204);
    }
}

module.exports = BaseController;
