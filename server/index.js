const express = require('express');
const { Question } = require('../database/index.js');

const app = express();
const PORT = 3001;

app.get('/questions/:id', (req, res) => {
  const { id } = req.params;
  Question.find({ product_id: String(id).padStart(3, '0') }, (err, data) => {
    if (err) {
      res.status(500).send(data);
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
