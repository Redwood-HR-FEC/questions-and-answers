// const CustomEnvironment = require('./custom-node-environments.js');
const mongoose = require('mongoose');
const databaseName = 'test';

describe('Question model test', () => {

  // connect to database
  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/${databaseName}`
    connection = await mongoose.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    // db = await connection.db(global.__MONGO_DB_NAME__);
  });

  // test schema
  // test get from database
  // test patch to database
  test('insert to model', () => {

  });
});
