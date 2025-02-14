const BaseController = require('./baseController.js');

/**
 * @class MinionsController
 * @extends BaseController
 * @description Controller for handling CRUD operations on the "minions" model.
 */
class MinionsController extends BaseController {
    /**
     * Creates an instance of MinionsController.
     * Initializes the controller with the "minions" model.
     */
    constructor() {
        super('minions');
    }
}

module.exports = new MinionsController();