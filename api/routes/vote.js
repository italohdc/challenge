const express = require('express');
const voteController = require('../controllers/vote');

const router = express.Router();

/* GET users listing. */
router.post('/', voteController.registerVote);

module.exports = router;
