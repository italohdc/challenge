const uniqid = require('uniqid');
const db = require('../datasource');

class VoteService {
  constructor() {
    this.tableName = 'votes';
  }

  put(user, music) {
    return new Promise((resolve, reject) => {
      const musicID = music && music.id;
      if (!musicID) throw new Error("Parameter 'id' in 'music' is not defined");

      const userNickname = user && user.nickname;
      if (!userNickname) throw new Error("Parameter 'nickname' in 'user' is not defined");

      const vote = {
        id: uniqid(),
        music_id: musicID,
        user_nickname: userNickname,
      };

      const requestParams = {
        TableName: this.tableName,
        Item: vote,
      };

      db.put(requestParams, (err) => {
        if (err) reject(err);
        else resolve(vote);
      });
    });
  }
}

const voteService = new VoteService();

module.exports = voteService;
