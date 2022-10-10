const Api = require("../httpStatusCode");
const ErrorHandler = require("./errorHandler");

class NotFoundError extends ErrorHandler {
  /**
   * Global Error Handler
   */

  constructor() {
    super("Route Not Found");
    this.statusCode = Api.NotFound();

    ErrorHandler.captureStackTrace(this, this.constructor);
  }
}

module.exports = NotFoundError;
