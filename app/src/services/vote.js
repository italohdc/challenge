import HostConfig from '../HostConfig';

class VoteService {
  constructor() {
    this.baseUrl = HostConfig.getApiUrl();
  }

  registerVote(nickname, musics) {
    return new Promise((resolve, reject) => {
      const url = `${this.baseUrl}/vote`;
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
          nickname,
          musics,
        }),
      };

      fetch(url, options)
        .then((response) => {
          if (response.status === 200) resolve(response.json());
          else if (response.status === 409) reject(new Error('User has already voted'));
          else reject(new Error('An internal server error ocurred'));
        })
        .catch(err => reject(err));
    });
  }
}

const voteService = new VoteService();
export default voteService;
