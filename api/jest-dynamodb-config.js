module.exports = {
  tables: [
    {
      TableName: 'musics',
      KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' },
      ],
      AttributeDefinitions: [
        { AttributeName: 'votes', AttributeType: 'N' },
        { AttributeName: 'name', AttributeType: 'S' },
        { AttributeName: 'artists', AttributeType: 'S' },
        { AttributeName: 'genre', AttributeType: 'S' },
        { AttributeName: 'danceability', AttributeType: 'N' },
        { AttributeName: 'energy', AttributeType: 'N' },
        { AttributeName: 'key', AttributeType: 'N' },
        { AttributeName: 'loudness', AttributeType: 'N' },
        { AttributeName: 'mode', AttributeType: 'N' },
        { AttributeName: 'speechiness', AttributeType: 'N' },
        { AttributeName: 'acousticness', AttributeType: 'N' },
        { AttributeName: 'instrumentalness', AttributeType: 'N' },
        { AttributeName: 'liveness', AttributeType: 'N' },
        { AttributeName: 'valence', AttributeType: 'N' },
        { AttributeName: 'tempo', AttributeType: 'N' },
        { AttributeName: 'duration_ms', AttributeType: 'N' },
        { AttributeName: 'time_signature', AttributeType: 'N' },
      ],
    },
    {
      TableName: 'users',
      KeySchema: [
        { AttributeName: 'nickname', KeyType: 'HASH' },
      ],
      AttributeDefinitions: [
        { AttributeName: 'hasVoted', AttributeType: 'B' },
      ],
    },
    {
      TableName: 'votes',
      KeySchema: [
        { AttributeName: 'user_nickname', KeyType: 'HASH' },
        { AttributeName: 'music_id', KeyType: 'RANGE' },
      ],
    },
  ],
};
