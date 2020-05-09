import React from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

const ListUp = styled.li`
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
  list-style-type: none;
  border-image-repeat:stretch;
  box-sizing:border-b ox;
  align-items:flex-start;
  margin-top: 5px;
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

const ExpandButton = styled.div`
  position: absolute;
  left: 18%;
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  padding: 0;
  text-align: center;
  text-decoration: none!important;
  vertical-align: middle;
  vertical-align:middle;
  width:232.359px;
  margin-top: 15px;
  margin-bottom: 20px;
  &:hover {
    border-color: #a2a6ac #979aa1 #82858a;
    background: #dee0e3;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none!important;
    vertical-align: middle;
  }
`;
const Span = styled.span`
line-height: 29px;
line-height: 29px;
padding: 0 10px 0 11px;
`;
class Votes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 4,
      open: false,
    };

    this.handleUpvotes = this.handleUpvotes.bind(this);
    this.handleDownvotes = this.handleDownvotes.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    // console.log(e);
    const { show, open } = this.state;
    const len = this.props.data.length;
    let num = show;
    num = show >= len ? show : num + 3;
    // console.log(num);
    this.setState({ show: num, open: !open });
  }

  render() {
    const { data } = this.props;
    const { show, open } = this.state;
    let expand = data.length - show;
    expand = show <= data.length ? expand : 0;
    const clickEvent = data.length > 4 && expand !== 0 ? (
    <div>
      <ExpandButton onClick={this.handleClick} className="expandButton">
        <Span>
          See more answered questions (
            {expand}
          )
        </Span>
      </ExpandButton>
    </div>
    ) : '';

    return (
      <WrapperBox>

        {data.slice(0, show).map((question) => {
          if (question.answers.length > 0) {
            return (
              <VotesQuestionsAnswers key={question.product_id + question.votes}>
                <Vote>
                  <ListUp onClick={() => this.handleUpvotes(question._id, question.votes, question.product_id)} className="upVote">
                    <ImageUp src="https://m.media-amazon.com/images/G/01/x-locale/communities/discussion_boards/neutral_up_arrow._CB442978120_.png" alt="Up" />
                  </ListUp>
                  <ShowVotes>
                    { question.votes }
                    <br />
                    <span>votes</span>
                  </ShowVotes>
                  <ListDown onClick={() => this.handleDownvotes(question._id, question.votes, question.product_id)}>
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
        {clickEvent}
      </WrapperBox>
    );
  }
}

export default Votes;
