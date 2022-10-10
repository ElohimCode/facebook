class ErrorHandler extends Error {
  /**
   * Global Error Handler
   * @param {Message to be displayed when error occured} message
   * @param {Error StatusCode} statusCode
   */

  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
