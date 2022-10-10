const Api = require("../httpStatusCode");
const ErrorHandler = require("./errorHandler");

class BadRequest extends ErrorHandler {
  /**
   * Global Error Handler
   * @param {Message to be displayed when error occured} message
   */

  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = Api.BadRequest();

    ErrorHandler.captureStackTrace(this, this.constructor);
  }
}

module.exports = BadRequest;
