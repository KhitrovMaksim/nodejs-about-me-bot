const pino = require('pino');

const logger = pino({
  transport: {
    target: process.env.PRETTY_LOGGING || 'pino-pretty',
    options: {
      translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
      colorize: true,
    },
  },
}, pino.destination('./combined.log'));

module.exports = logger;
