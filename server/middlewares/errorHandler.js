"use strict";

const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = err.message;

  switch (err.name) {
    case "SequelizeDatabaseError":
      status = 400;
      message = "Component type name Invalid";
      break;
    case "SequelizeValidationError":
      status = 400;
      message = err.errors[0].message;
      break;
    case "TypeError":
      status = 400;
      message = "Invalid Component ID";
      break;
    case "BadRequest":
      status = 400;
      break;
    case "Unauthorized":
      status = 401;
      break;
  }

  res.status(status).json({ message });
};

module.exports = errorHandler;
