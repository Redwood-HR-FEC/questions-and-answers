/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/questions', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('connected');
});

const { Schema } = mongoose;
const questionsSchema = new Schema({
  product_id: String,
  questions: String,
  question_url: String,
  votes: Number,
  answers: {
    type: Array,
    default: [],
  },
});

const productsSchema = new Schema({
  product_id: String,
  questions: {
    type: Array,
    default: [],
  },
});

const Question = mongoose.model('Question', questionsSchema);
const Product = mongoose.model('Product', productsSchema);

module.exports = { Question, Product };
