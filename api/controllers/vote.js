const userService = require('../services/user');
const voteService = require('../services/vote');
const musicService = require('../services/music');

module.exports = {

  registerVote: async (req, res) => {
    const { nickname, musics } = req.body;
    if (!nickname) return res.status(400).send({ msg: "Parameter 'nickname' not provided" });
    if (!musics) return res.status(400).send({ msg: "Parameter 'music' not provided" });
    if (!Array.isArray(musics)) return res.status(400).send({ msg: "Parameter 'music' must be an array" });

    const searchedUser = await userService.findByNickname(nickname);
    if (searchedUser && searchedUser.hasVoted) return res.status(409).send({ msg: 'User has already voted' });

    const newUser = await userService.put({ nickname, hasVoted: false });

    const votePromises = musics.map((music, index) => voteService.put(newUser, { id: music }, index));
    const incrementPromises = musics.map((music) => musicService.incrementVote({ id: music }));

    try {
      Promise.all([...votePromises, ...incrementPromises]);
    } catch (err) {
      return res.status(500).send({ err, msg: 'An error ocurred when trying to compute votes. Try again!' });
    }

    await userService.put({ nickname, hasVoted: true });

    return res.status(200).send({ msg: 'Votes computed' });
  },

};
