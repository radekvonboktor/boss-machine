const BaseController = require('./baseController.js');

/**
 * @class IdeasController
 * @extends BaseController
 * @description Controller for handling CRUD operations on the "ideas" model.
 */
class IdeasController extends BaseController {
    /**
     * Creates an instance of IdeasController.
     * Initializes the controller with the "ideas" model.
     */
    constructor() {
        super('ideas');
    }
}

module.exports = new IdeasController();