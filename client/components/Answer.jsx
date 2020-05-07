import React from 'react';
import styled from 'styled-components';

const moment = require('moment');

const Date = styled.span`
  color: #767676!important;
`;
const Arrow = styled.li`
  background-image: url(https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIIcon-sprite_1x-e9434610f810a3a99b3f0e49c1b938c9d76628b8._V2_.png);
  background-position-x:-82px;
  background-position-y:-293px;
  background-size:400px 900px;
  display:inline-block;
  color:rgb(17, 17, 17);
  position:relative;
  width:7px;
  height:9px;
  margin-right:0px;
  text-size-adjust:100%;
`;

const ATag = styled.a`
color:rgb(0, 102, 192);
text-decoration-style:solid;
text-decoration-line:none;
line-height:19px;
padding-left: 5px;

&:hover {
  color:rgb(196, 85, 0);
  text-decoration-style:solid;
  text-decoration-line:underline;
}
`;
const AnswerBox = styled.div`
  margin-bottom: 10px;
`;

class Answer extends React.Component {
  constructor({props}) {
    super(props);
    this.state = {
      show: 1,
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleClick() {
    // console.log(e);
    const { show, open } = this.state;
    const len = this.props.answer.length;
    let num = show;
    num = show >= len ? show : num + 3;
    // console.log(num);
    this.setState({ show: num, open: !open });
  }

  handleCollapse() {
    let num = 1;
    const { open } = this.state;
    this.setState({ show: num, open: !open });
  }

  render() {
    const { answer } = this.props;
    const { show, open } = this.state;
    let expand = answer.length - show;
    expand = show <= answer.length ? expand : 0;
    let collapse = !open ? '' : <button onClick={this.handleCollapse}>Collapse all answers</button>;
    let clickEvent = (
      <div>
        <Arrow />
        <ATag onClick={this.handleClick}>
          See more answers (
          { expand }
          )
        </ATag>
      </div>
    );

    const showAnswers = answer.slice(0, show).map((a) => (
      <AnswerBox key={a.date_posted + a.username}>
        <span>{a.answer}</span>
        <br />
        <Date>
          By
          {' '}
          {a.username}
          {' '}
          on
          {' '}
          {moment(a.date_posted).format('ll')}
        </Date>
      </AnswerBox>
    ));
    return (
      <div>
        {showAnswers}
        {clickEvent}
        {collapse}
      </div>
    );
  }
}

export default Answer;
