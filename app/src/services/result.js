import HostConfig from '../HostConfig';

class ResultService {
  constructor() {
    this.baseUrl = `${HostConfig.getApiUrl()}/results`;
  }

  getRank() {
    return new Promise((resolve, reject) => {
      const url = `${this.baseUrl}/rank`;
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      };

      fetch(url, options)
        .then((response) => {
          if (response.status === 200) resolve(response.json());
          else reject(new Error('An internal server error ocurred'));
        })
        .catch(err => reject(err));
    });
  }

  getUsersContributions() {
    return new Promise((resolve, reject) => {
      const url = `${this.baseUrl}/users-contributions`;
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      };

      fetch(url, options)
        .then((response) => {
          if (response.status === 200) resolve(response.json());
          else reject(new Error('An internal server error ocurred'));
        })
        .catch(err => reject(err));
    });
  }
}

const resultService = new ResultService();
export default resultService;
