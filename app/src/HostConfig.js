export default {
  getApiUrl() {
    if (process.env.NODE_ENV === 'production') {
      return 'http://localhost:3000';
    }

    return 'http://localhost:3000';
  },
};
