var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/questions', { useNewUrlParser: true });


var db = mongoose.connection;
db.on('error', console.log('connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('connected');
});

var questionsSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    id: Number,
    questions: String,
    question_url: String,
    votes: Number,
    answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
});

const answersSchema = Schema({
    id: { type: Schema.Types.ObjectId, ref: 'Question' },
    answer: String,
    username: String,
    date_posted: Date
});



var Question = mongoose.model('Question', questionsSchema);
var Answer = mongoose.model('Answer', answersSchema);

module.exports = { Question, Answer };