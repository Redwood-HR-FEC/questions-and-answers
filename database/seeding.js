/* eslint-disable consistent-return */
const faker = require('faker');
// const mongoose = require('mongoose');
const { Question } = require('./index.js');


const randomAnswers = (num) => {
  const answer = {
    username: faker.internet.userName('ink', 'squid'),
    answer: faker.random.words(20),
    date_posted: faker.date.past(),
  };
  const answerArr = [];
  for (let i = 0; i < num; i += 1) {
    answerArr.push(answer);
  }
  return answerArr;
};
const createQuestions = (count) => {
  Question.create({
    product_id: String(count).padStart(3, '0'),
    questions: faker.random.words(10),
    question_url: faker.internet.url(),
    votes: faker.random.number(100),
    answers: randomAnswers(faker.random.number(5)),
  }, (err) => {
    // eslint-disable-next-line no-console
    if (err) return console.log(err);
    // saved!
    // mongoose.connection.close();
  });
};

for (let i = 1; i <= 100; i += 1) {
  createQuestions(i);
}
