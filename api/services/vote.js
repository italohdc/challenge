const db = require('../datasource');

class VoteService {
  constructor() {
    this.tableName = 'votes';
  }

  put(user, music, position) {
    return new Promise((resolve, reject) => {
      const musicID = music && music.id;
      if (!musicID) throw new Error("Parameter 'id' in 'music' is not defined");

      const userNickname = user && user.nickname;
      if (!userNickname) throw new Error("Parameter 'nickname' in 'user' is not defined");

      const vote = {
        music_id: musicID,
        user_nickname: userNickname,
        position,
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

  getAll() {
    return new Promise((resolve, reject) => {
      const requestParams = {
        TableName: this.tableName,
      };

      db.scan(requestParams, (err, data) => {
        if (err) return reject(err);

        if (data.Items) resolve(data.Items);
        else resolve(null);
      });
    });
  }

  filterByMusic(music) {
    return new Promise((resolve, reject) => {
      const musicID = music && music.id;
      if (!musicID) throw new Error("Parameter 'id' in 'music' is not defined");

      const requestParams = {
        TableName: this.tableName,
        KeyConditionExpression: '#music = :music_id',
        ExpressionAttributeNames: {
          '#music': 'music_id',
        },
        ExpressionAttributeValues: {
          ':music_id': musicID,
        },
      };

      db.query(requestParams, (err, data) => {
        if (err) return reject(err);

        if (data.Items) resolve(data.Items);
        else resolve(null);
      });
    });
  }
}

const voteService = new VoteService();

module.exports = voteService;
