/* eslint-disable consistent-return */
const faker = require('faker');
// const mongoose = require('mongoose');
const { Question } = require('./index.js');


const randomAnswers = (num) => {
  const answerArr = [];
  for (let i = 0; i < num; i += 1) {
    answerArr.push({
      username: faker.internet.userName(faker.name.firstName(), faker.name.lastName()),
      answer: faker.random.words(20),
      date_posted: faker.date.past(),
    });
  }
  return answerArr;
};


const createQuestions = (num) => {
  Question.create({
    product_id: String(num).padStart(3, '0'),
    questions: faker.random.words(10),
    question_url: faker.internet.url(),
    votes: faker.random.number(100),
    answers: randomAnswers(faker.random.number(5)),
  }, (err) => {
    // eslint-disable-next-line no-console
    if (err) return console.error(err);
    // saved!
    // mongoose.connection.close();
  });
};

// const randomNQuestions = (num) => {
//   const questionArr = [];
//   for (let i = 0; i < num; i += 1) {
//     questionArr.push({
//       questions: faker.random.words(10),
//       question_url: faker.internet.url(),
//       votes: faker.random.number(100),
//       // answers: randomAnswers(faker.random.number(5)),
//     });
//   }
//   return questionArr;
// };

// const products = new Product({
//   product_id: '2',
//   questions: randomAnswers(4),
// }, (err) => {
//   console.log(err);
// });
// products.save((err) => {
//   if(err) {
//     console.log(err);
//     return;
//   }
//   console.log('saved to db');
// });
// console.log(randomNQuestions(2));

// const createProducts = (productCount) => {
//   Product.create({
//     product_id: String(productCount).padStart(3, '0'),
//     questions: randomNQuestions(2),
//   }, (err) => {
//     if (err) return console.log(err);
//     // saved
//   });
// };

// createProducts(1);
for (let i = 1; i <= 200; i += 1) {
  createQuestions(faker.random.number(100));
}
