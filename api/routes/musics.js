const express = require('express');
const musicsController = require('../controllers/musics');

const router = express.Router();

/* GET users listing. */
router.get('/', musicsController.fetchMusics);

module.exports = router;
