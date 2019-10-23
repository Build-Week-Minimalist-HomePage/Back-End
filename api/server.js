const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const notesRouter = require('../notes/notes-router.js');
const linksRouter = require('../links/links-router.js');

const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] Was method "${req.method}" to address "${req.path}"`);
    next();
}

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use('/api/auth', authRouter);
server.use('/api/notes', notesRouter);
server.use('/api/links', linksRouter);

server.get('/', (req, res) => {
    res.send("It's alive!");
  });
  

module.exports = server;
