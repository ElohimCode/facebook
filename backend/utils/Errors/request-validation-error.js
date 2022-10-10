const Api = require("../httpStatusCode");
const ErrorHandler = require("./errorHandler");

class RequestValidationError extends ErrorHandler {
  /**
   * Global Error Handler
   */

  constructor() {
    super("Invalid request parameters");
    this.statusCode = Api.BadRequest();

    ErrorHandler.captureStackTrace(this, this.constructor);
  }
}

module.exports = RequestValidationError;
