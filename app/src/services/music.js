import HostConfig from '../HostConfig';

class MusicService {
  constructor() {
    this.baseUrl = HostConfig.getApiUrl();
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const url = `${this.baseUrl}/musics`;
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

const musicService = new MusicService();
export default musicService;
