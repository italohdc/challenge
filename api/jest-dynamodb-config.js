module.exports = {
  tables: [
    {
      TableName: 'musics',
      KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' },
        { AttributeName: 'votes', KeyType: 'RANGE' },
      ],
      AttributeDefinitions: [
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
        { AttributeName: 'id', KeyType: 'HASH' },
        { AttributeName: 'nickname', KeyType: 'RANGE' },
      ],
      AttributeDefinitions: [
        { AttributeName: 'hasVoted', AttributeType: 'B' },
      ],
    },
    {
      TableName: 'votes',
      KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' },
        { AttributeName: 'music_id', KeyType: 'RANGE' },
      ],
      AttributeDefinitions: [
        { AttributeName: 'user_nickname', AttributeType: 'S' },
      ],
    },
  ],
};
