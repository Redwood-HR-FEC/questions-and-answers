import React from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

const ListUp = styled.li`
  background-image: url();
  list-style-type: none;
  border-image-repeat:stretch;
  box-sizing:border-box;
  align-items:flex-start;
`;

const ImageUp = styled.img`
  &:hover{
    content: url(https://m.media-amazon.com/images/G/01/x-locale/communities/discussion_boards/highlighted_up_arrow._CB442978120_.png);
  }
`;

const ImageDown = styled.img`
  &:hover{
    content: url(https://m.media-amazon.com/images/G/01/x-locale/communities/discussion_boards/highlighted_down_arrow._CB442978121_.png);
  }
`;
const ListDown = styled.li`
  background-image: url();
  list-style-type: none;
  border-image-repeat:stretch;
  box-sizing:border-b ox;
  align-items:flex-start;
  margin-top: 5px;

  &:hover {
    background-image: url();
  }
`;
const QuestionAnswerWraper = styled.div`
  box-sizing:border-box;
  position:relative;
  padding-left:7.34375px;
  margin-top: 20px;
`;
const Vote = styled.ul`
  color:rgb(17, 17, 17);
  display:block;
  float:left;
  border-right: 1px solid #ddd;
  width:65px;
  margin-left:-35px;
  line-height: 19px;
  text-align:center;
  padding-right: 15px;
`;

const WrapperBox = styled.div`
  box-sizing:border-box;
  color:rgb(17, 17, 17);

`;

const ShowVotes = styled.li`
  box-sizing:border-box;
  color:rgb(0, 0, 0);
  display:inline;

`;
const QuestionWrapper = styled.div`
  margin-right: 1.5rem;
  font-weight:700;
`;

const AnswersWrapper = styled.div`
  margin-right: 2rem;
  box-sizing:border-box;
  font-weight:700;
`;

const VotesQuestionsAnswers = styled.div`
  display: flex;
`;

const Wrap = styled.div`
  display: flex;
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

  handleUpvotes(id, votes, productId) {
    // console.log(id);
    const { changeVote } = this.props;
    changeVote(votes + 1, id, productId);
  }

  handleDownvotes(id, votes, productId) {
    const { changeVote } = this.props;
    changeVote(votes - 1, id, productId);
  }


  render() {
    const { data } = this.props;

    return (
      <WrapperBox>

        {data.map((question) => {
          if (question.answers.length > 0) {
            return (
              <VotesQuestionsAnswers key={question.product_id + question.votes}>
                <Vote>
                  <ListUp onClick={() => this.handleUpvotes(question._id, question.votes, question.product_id)}>
                    <ImageUp src="https://m.media-amazon.com/images/G/01/x-locale/communities/discussion_boards/neutral_up_arrow._CB442978120_.png" alt="Up" />
                  </ListUp>
                  <ShowVotes>
                    { question.votes }
                    <br />
                    <span>votes</span>
                  </ShowVotes>
                  <ListDown onClick={()=> this.handleDownvotes(question._id, question.votes, question.product_id)}>
                    <ImageDown src="https://m.media-amazon.com/images/G/01/x-locale/communities/discussion_boards/neutral_down_arrow._CB442978120_.png" alt="Down" />
                  </ListDown>
                </Vote>
                <QuestionAnswerWraper>
                  <Wrap>
                    <QuestionWrapper>Question:</QuestionWrapper>
                    <Question question={question.questions} url={question.question_url} />
                  </Wrap>
                  <Wrap>
                    <AnswersWrapper>Answer:</AnswersWrapper>

                    <Answer answer={question.answers} />
                  </Wrap>
                </QuestionAnswerWraper>
              </VotesQuestionsAnswers>
            );
          }
        })}
      </WrapperBox>
    );
  }
}

export default Votes;
