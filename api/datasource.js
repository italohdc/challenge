const AWS = require('aws-sdk');
const { DocumentClient } = require('aws-sdk/clients/dynamodb');

const isTest = process.env.JEST_WORKER_ID;
const config = {
  convertEmptyValues: true,
  ...(isTest && { endpoint: 'localhost:8000', sslEnabled: false, region: 'local-env' }),
};

AWS.config.update({
  accessKeyId: 'ACCESS_KEY',
  region: 'REGION',
});

const db = new DocumentClient(config);

module.exports = db;
