const db = require('../datasource');

class MusicService {
  constructor() {
    this.tableName = 'musics';
  }

  put(music) {
    return new Promise((resolve, reject) => {
      if (!music) throw new Error("Parameter 'music' was not provided");

      const requestParams = {
        TableName: this.tableName,
        Item: music,
      };

      db.put(requestParams, (err) => {
        if (err) reject(err);
        else resolve(music);
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const requestParams = {
        TableName: this.tableName,
      };

      db.scan(requestParams, (err, data) => {
        if (err) reject(err);

        if (data.Items) resolve(data.Items);
        else resolve(null);
      });
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      if (!id) throw new Error("Parameter 'id' was not provided");

      const requestParams = {
        TableName: this.tableName,
        Key: {
          id,
        },
      };

      db.get(requestParams, (err, data) => {
        if (err) reject(err);

        if (data.Item) resolve(data.Item);
        else resolve(null);
      });
    });
  }

  incrementVote(music) {
    return new Promise((resolve, reject) => {
      const musicID = music && music.id;
      if (!musicID) throw new Error("Parameter 'id' in 'music' is not defined");

      const requestParams = {
        TableName: this.tableName,
        Key: {
          id: musicID,
        },
        UpdateExpression:
          'ADD #votes :vote',
        ExpressionAttributeNames: {
          '#votes': 'votes',
        },
        ExpressionAttributeValues: {
          ':vote': 1,
        },
      };

      db.update(requestParams, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }
}

const musicService = new MusicService();

module.exports = musicService;
