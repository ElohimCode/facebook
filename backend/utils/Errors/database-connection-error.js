const Api = require("../httpStatusCode");
const ErrorHandler = require("./errorHandler");

class DatabaseConnectionError extends ErrorHandler {
  /**
   * Global Error Handler
   */

  constructor() {
    super("Error Connecting to db");
    this.statusCode = Api.InternalServerError();
    this.reason = "Error connecting to database";

    ErrorHandler.captureStackTrace(this, this.constructor);
  }
}

module.exports = DatabaseConnectionError;
