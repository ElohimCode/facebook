const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");

const Api = require("./utils/httpStatusCode");
const errorMiddleware = require("./middlewares/errors");
const ErrorHandler = require("./utils/Errors/errorHandler");
const connectDatabase = require("./config/database");
dotenv.config();

const app = express();

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(
    `Error: ${err.message} \nShutting down due to uncaught exception`
  );
  process.exit(1);
});

// Connectin to database
connectDatabase();

// Set up body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Pipelines
app.use(express.json());
app.use(cors());

// Routes;
readdirSync("./routes").map((route) =>
  app.use("/api", require("./routes/" + route))
);

// Handle unhandled routes
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`${req.originalUrl} route not found.`, Api.NotFound()));
});

// Registering the middleware to handle errors
app.use(errorMiddleware);

// PORT Connection
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () =>
  console.log(
    `Server is running on port ${PORT}. \nClick http://localhost:${PORT}/api/ to view on browser... \nCurrent Environment: ${process.env.NODE_ENV}`
  )
);

// Handling Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(
    `Error: ${err.message} \nShutting down the server due to unhandled promise rejection.`
  );
  server.close(() => {
    process.exit(1);
  });
});
