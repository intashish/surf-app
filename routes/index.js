const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop Home' });
});

/* GET /register. */
router.get('/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST /register */
router.get('/', (req, res, next) => {
  res.send('POST /register');
});

/* GET /login */
router.post('/', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login */
router.get('/', (req, res, next) => {
  res.send('POST /login');
});

/* GET /profile */
router.get('/', (req, res, next) => {
  res.send('POST /login');
});

module.exports = router;
