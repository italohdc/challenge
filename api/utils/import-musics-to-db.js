const musicService = require('../services/music');
const musics = require('./spotify-top100-2018');

musics.forEach(async (music) => {
  try {
    musicService.put(music);
  } catch (err) {
    throw new Error(err);
  }
});
