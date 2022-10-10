class ErrorHandler extends Error {
  /**
   * Global Error Handler
   * @param {Message to be displayed when error occured} message
   */

  constructor(message) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
