import React from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

const List = styled.li`
  list-style-type: none;
  text-align: center;
`;

const QuestionAnswerWraper = styled.div`
padding-left: 1%;
float: left;
`;
const Vote = styled.div`
  width: 65px;
  // margin-left: -65px;
  float: left;
  background-color: white;
`;

class Votes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      up: 0,
      down: 0,
    };

    this.handleUpvotes = this.handleUpvotes.bind(this);
    this.handleDownvotes = this.handleDownvotes.bind(this);
  }

  handleUpvotes(e) {
    console.log(e);
  }

  handleDownvotes(e) {
    console.log(e);
  }

  render() {
    const { data } = this.props;
    return (
      <div>

        {data.map((question, idx) => {
          return (
            <div key={question.product_id + question.votes}>
              <Vote>
                <List onClick={this.handleUpvotes}>
                  <img src="https://m.media-amazon.com/images/G/01/x-locale/communities/discussion_boards/neutral_up_arrow._CB442978120_.png" alt="Up" />
                </List>
                <List>
                  { question.votes }
                  {' '}
                  votes
                </List>
                <List onClick={this.handleDownvotes}>
                  <img src="https://m.media-amazon.com/images/G/01/x-locale/communities/discussion_boards/neutral_down_arrow._CB442978120_.png" alt="Down" />
                </List>
              </Vote>
              <QuestionAnswerWraper>
                <div>
                  Question
                  <Question question={question.questions} url={question.question_url} />
                </div>
                <div>
                  Answer
                  <Answer answer={question.answers} />
                </div>
              </QuestionAnswerWraper>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Votes;
