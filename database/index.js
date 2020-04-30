var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/questions', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.log('connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('connected');
});

var questionsSchema = new mongoose.Schema({
    questions: String,
    question_url: String,
    votes: Number,
    answers: [
        {
            answer: String,
            username: String,
            date_posted: Date
        }
    ]
});

var Question = mongoose.model('Question', questionsSchema);