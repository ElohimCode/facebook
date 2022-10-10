class Api {
  static Ok() {
    return 200;
  }

  static Created() {
    return 201;
  }

  static NoContent() {
    return 204;
  }
  static BadRequest() {
    return 400;
  }
  static Unauthorized() {
    return 401;
  }
  static Forbidden() {
    return 403;
  }
  static NotFound() {
    return 404;
  }
  static InternalServerError() {
    return 500;
  }
}

module.exports = Api;
