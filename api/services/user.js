const db = require('../datasource');

class UserService {
  constructor() {
    this.tableName = 'users';
  }

  put(user) {
    return new Promise((resolve, reject) => {
      const userNickname = user && user.nickname;
      if (!userNickname) throw new Error("Parameter 'nickname' in 'user' is not defined");

      const userToBeCreated = {
        nickname: user.nickname,
        hasVoted: user.hasVoted || true,
      };

      const requestParams = {
        TableName: this.tableName,
        Item: userToBeCreated,
      };

      db.put(requestParams, (err) => {
        if (err) reject(err);
        else resolve(userToBeCreated);
      });
    });
  }

  findByNickname(nickname) {
    return new Promise((resolve, reject) => {
      if (!nickname) throw new Error("Parameter 'nickname' was not provided");

      const requestParams = {
        TableName: this.tableName,
        Key: {
          nickname,
        },
      };

      db.get(requestParams, (err, data) => {
        if (err) reject(err);

        if (data && data.Item) resolve(data.Item);
        else resolve(null);
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
        else resolve(data);
      });
    });
  }
}

const userService = new UserService();

module.exports = userService;
