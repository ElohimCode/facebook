const Api = require("../httpStatusCode");
const ErrorHandler = require("./errorHandler");

class NotAuthorisedError extends ErrorHandler {
  /**
   * Global Error Handler
   */

  constructor() {
    super("Not Authorised");
    this.statusCode = Api.Unauthorized();

    ErrorHandler.captureStackTrace(this, this.constructor);
  }
}

module.exports = NotAuthorisedError;
