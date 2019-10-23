const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Auth = require('./auth-model.js');
const secrets = require('../config/secretConfig.js');
const validateAccountData = require('./validateAccountData.js');
const authMiddleware = require('./authenticate-middleware.js');



router.post('/register', validateAccountData, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); 
  user.password = hash;

  Auth.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({ message: 'Cannot add the user', error} );
    });
});

router.post('/login', validateAccountData, (req, res) => {
  let { username, password } = req.body;

  Auth.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        });
      } else {
        res.status(401).json({ message: 'Access denied' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/users', authMiddleware, (req, res) => {

  Auth.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ message: 'Cannot get the list of users', error} );
    });
});

function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id
  };
  
  const options = {
    expiresIn: '2h',
  }

  return jwt.sign(payload, secrets.jwtSecret, options);
}


function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id
  };
  
  const options = {
    expiresIn: '2h',
  }

  return jwt.sign(payload, secrets.jwtSecret, options);
}



module.exports = router;
