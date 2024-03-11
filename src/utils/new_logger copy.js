import __dirname from '../utils.js';
import path from 'path';
import winston from 'winston';
import config from '../config/config.js'

const logsDirectory = path.join(__dirname, 'logs');
const logFileGeneral = path.join(logsDirectory, 'general.log');
const logFileError = path.join(logsDirectory, 'error.log');
/* console.log("modo")
console.log(config.environment) */

let logger;

if (!config.environment=='prod'){

   logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
      new winston.transports.Console({ level: 'http' }),
      new winston.transports.File({ filename: logFileGeneral, level: 'warn' }),
      new winston.transports.File({ filename: logFileError, level: 'error' }),
    ],
  });
}else{
  logger = winston.createLogger({
    transports: [
      new winston.transports.Console({ level: 'info' }),
      new winston.transports.File({ filename: logFileGeneral, level: 'warn' }),
      new winston.transports.File({ filename: logFileError, level: 'error' }),
    ],
  });
}

export const addLoger = (req, res, next) => {
  req.logger = logger;

  req.logger.warn(
    `${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${
      new Date().toLocaleTimeString()
    }`
  );
  req.logger.error(
    `${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${
      new Date().toLocaleTimeString()
    }`
  );
  next();
};
 

//format: winston.format.simple()