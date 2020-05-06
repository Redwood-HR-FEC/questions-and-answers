import React from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

const ListUp = styled.li`
  background-image: url();
  list-style-type: none;
  // text-align: center;
  // background-size:100%;
  border-image-repeat:stretch;
  box-sizing:border-box;
  // cursor:pointer;
  // overflow-wrap:break-word;
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
  // text-align: center;
  // background-size:100%;
  border-image-repeat:stretch;
  box-sizing:border-b ox;
  // cursor:pointer;
  // overflow-wrap:break-word;
  align-items:flex-start;

  &:hover {
    background-image: url();
  }
`;
const QuestionAnswerWraper = styled.div`
  box-sizing:border-box;
  // color:rgb(17, 17, 17);
  // display:block;
  // float:left;
  // height:634px;
  // line-height:19px;
  // min-height:1px;
  // overflow-wrap:break-word;
  // overflow-x:visible;
  // overflow-y:visible;
  // padding-left:7.34375px;
  // position:relative;
  // text-size-adjust:100%;
  // width:735px;
  // zoom:1;
`;
const Vote = styled.div`
  color:rgb(17, 17, 17);
  display:block;
  // float:left;
  // height:76px;
  // line-height:19px;
  // margin-left:-65px;
  // min-height:1px;
  // overflow-wrap:break-word;
  // overflow-x:visible;
  // overflow-y:visible;
  // position:relative;
  // text-size-adjust:100%;
  // width:65px;
  // zoom:1;
`;

const WrapperBox = styled.div`
  box-sizing:border-box;
  color:rgb(17, 17, 17);
  // display:block;
  // height:634px;
  // line-height:19px;
  // overflow-wrap:break-word;
  // padding-bottom:0px;
  // padding-left:65px;
  // padding-right:0px;
  // padding-top:0px;
  // position:relative;
  // text-size-adjust:100%;
  // width:800px;
`;

const ShowVotes = styled.li`
  box-sizing:border-box;
  color:rgb(0, 0, 0);
  display:inline;
  // height:auto;
  // line-height:19px;
  // list-style-image:none;
  // list-style-position:outside;
  // list-style-type:none;
  // overflow-wrap:break-word;
  // text-align:center;
  // text-indent:0px;
  // text-size-adjust:100%;
  // width:auto;
`;
const QuestionWrapper = styled.div`
  box-sizing:border-box;
  // color:rgb(17, 17, 17);
  // display:block;
  // height:19px;
  // line-height:19px;
  // margin-bottom:10px;
  // overflow-wrap:break-word;
  // position:relative;
  // text-size-adjust:100%;
  // width:727.656px;
`;

// const QuestionTitle = styled.div`
//   width:100px;
//   margin-left:-100px;
//   float:left;
// `;

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
          return (
            <div key={question.product_id + question.votes}>
              <Vote>
                <ListUp onClick={() => this.handleUpvotes(question._id, question.votes, question.product_id)}>
                  <ImageUp src="https://m.media-amazon.com/images/G/01/x-locale/communities/discussion_boards/neutral_up_arrow._CB442978120_.png" alt="Up" />
                </ListUp>
                <ShowVotes>
                  { question.votes }
                  {' '}
                  votes
                </ShowVotes>
                <ListDown onClick={()=> this.handleDownvotes(question._id, question.votes, question.product_id)}>
                  <ImageDown src="https://m.media-amazon.com/images/G/01/x-locale/communities/discussion_boards/neutral_down_arrow._CB442978120_.png" alt="Down" />
                </ListDown>
              </Vote>
              <QuestionAnswerWraper>
                <QuestionWrapper>
                  <div>Question</div>

                  <Question question={question.questions} url={question.question_url} />
                </QuestionWrapper>
                <div>
                  <div>Answer</div>

                  <Answer answer={question.answers} />
                </div>
              </QuestionAnswerWraper>
            </div>
          );
        })}
      </WrapperBox>
    );
  }
}

export default Votes;
