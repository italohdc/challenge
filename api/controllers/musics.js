const musicService = require('../services/music');

module.exports = {

  fetchMusics: async (req, res) => {
    const musics = await musicService.getAll();

    // Sort musics alphabetically
    musics.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    return res.status(200).send(musics);
  },

};
