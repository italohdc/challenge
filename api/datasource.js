const AWS = require('aws-sdk');
const { DocumentClient } = require('aws-sdk/clients/dynamodb');

const isTest = process.env.JEST_WORKER_ID;
const config = {
  convertEmptyValues: true,
  ...(isTest && { endpoint: 'localhost:8000', sslEnabled: false, region: 'local-env' }),
};

AWS.config.update({
  accessKeyId: 'AKIA5WYRPAWJXGFEHTNU',
  secretAccessKey: process.env.AWS_DYNAMODB_KEY,
  region: 'us-east-1',
});

const db = new DocumentClient(config);

module.exports = db;
