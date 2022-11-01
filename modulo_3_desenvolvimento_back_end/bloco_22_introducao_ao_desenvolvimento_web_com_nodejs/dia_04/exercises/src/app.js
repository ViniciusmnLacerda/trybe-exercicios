const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateUser = require('./middlewares/validateUser');
const auth = require('./middlewares/auth');
const generateToken = require('./utils/generateToken');

const app = express();

app.use(express.json());

app.post('/activities', 
  auth,
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (_req, res) => {
  res.status(201).json({ message: 'Atividade registrada com sucesso' });
});

app.post('/sigup', validateUser, (req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = app;