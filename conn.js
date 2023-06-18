const { MongoClient } = require('mongodb');

const connectionString = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.0';
const client = new MongoClient(connectionString);

try {
  let db = client.db("jogo");
  module.exports = db;
} catch(error) {
  console.error(error);
}