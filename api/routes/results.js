const express = require('express');
const resultsController = require('../controllers/results');

const router = express.Router();

/* GET users listing. */
router.get('/rank', resultsController.rank);
router.get('/users-contributions', resultsController.usersContributions);

module.exports = router;
