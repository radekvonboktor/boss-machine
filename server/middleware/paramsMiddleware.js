const { getFromDatabaseById } = require('../db.js');

/**
 * Middleware factory for validating and retrieving an entity by ID.
 * @param {string} model - The name of the database model to retrieve data from.
 * @returns {function} Express middleware function for parameter validation.
 */
module.exports = (model) => {
    /**
     * Middleware function to validate and attach a database ID to the request.
     * @param {import('express').Request} req - Express request object.
     * @param {import('express').Response} res - Express response object.
     * @param {function} next - Express next middleware function.
     * @param {string} id - The ID parameter from the request URL.
     */
    return (req, res, next, id) => {
        // Validate that the ID is a positive integer
        if (!/^\d+$/.test(id)) {
            return res.status(404).json({ error: "Invalid ID format" });
        }

        // Check if the ID exists in the database
        if (getFromDatabaseById(model, id) === undefined) {
            return res.status(404).json({ error: "ID doesn't exist!" });
        }

        // Attach the validated ID to the request object
        req.dbId = id;
        next();
    };
};
