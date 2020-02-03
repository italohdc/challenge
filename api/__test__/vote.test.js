const vote = require('../services/vote');

it('should insert vote into table', async () => {
  const user = { nickname: 'italo' };
  const music = {
    id: '6DCZcSspjsKoFjzjrWoCd',
    name: "God's Plan",
    artists: 'Drake',
    genre: 'Hip-Hop/Rap',
    danceability: 0.754,
    energy: 0.449,
    key: 7,
    loudness: -9.211,
    mode: 1,
    speechiness: 0.109,
    acousticness: 0.0332,
    instrumentalness: 0.0000829,
    liveness: 0.552,
    valence: 0.357,
    tempo: 77.169,
    duration_ms: 198973,
    time_signature: 4,
  };

  const createdVote = await vote.put(user, music);
  expect(createdVote).toEqual({
    id: '',
    music_id: '6DCZcSspjsKoFjzjrWoCd',
    user_nickname: 'italo',
  });
});
