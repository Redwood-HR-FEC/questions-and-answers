const express = require('express');
const { Question } = require('../database/index.js');

const app = express();
const PORT = 3001;

// middleware
app.use(express.json());

// static
app.use('/:id', express.static('public'));

// get data from database using express router
app.get('/questions/:id', (req, res) => {
  const { id } = req.params;
  Question.find({ product_id: id.padStart(3, '0') }).sort({ votes: -1 }).exec((err, data) => {
    if (err) {
      res.status(500).send([]);
    } else {
      res.send(data);
    }
  });
});

app.patch('/questions', (req, res) => {
  // console.log(req.body);
  const { id, vote } = req.body;
  Question.update({ _id: id }, { votes: vote }, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // console.log('updated');
      res.send('updated');
    }
  });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
