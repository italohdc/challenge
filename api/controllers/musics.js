const musicService = require('../services/music');

module.exports = {

  fetchMusics: async (req, res) => {
    const musics = await musicService.getAll();
    return res.status(200).send(musics);
  },

};
