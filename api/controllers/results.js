const userService = require('../services/user');
const voteService = require('../services/vote');
const musicService = require('../services/music');

const generateRank = async () => {
  const musics = await musicService.getAll();
  musics.sort((a, b) => b.votes - a.votes);

  const top5 = musics.slice(0, 5);
  return top5;
};

const calculateUsersContributions = async (rank) => {
  const allUsers = await userService.getAll();
  allUsers.forEach((user, index) => { allUsers[index].validVotes = 0; });

  const validContributionsPromises = rank.map((music) => voteService.filterByMusic(music));
  const validContributions = await Promise.all(validContributionsPromises);

  validContributions.forEach((contributions) => {
    contributions.forEach((contribution) => {
      const searchedUser = allUsers.find((user) => user.nickname === contribution.user_nickname);
      if (searchedUser) searchedUser.validVotes += 1;
    });
  });

  // Sort users alphabetically
  allUsers.sort((a, b) => {
    if (a.nickname < b.nickname) return -1;
    if (a.nickname > b.nickname) return 1;
    return 0;
  });

  return allUsers;
};

module.exports = {

  rank: async (req, res) => {
    const rank = await generateRank();
    return res.status(200).send(rank);
  },

  usersContributions: async (req, res) => {
    const rank = await generateRank();
    const usersList = await calculateUsersContributions(rank);
    return res.status(200).send(usersList);
  },

};
