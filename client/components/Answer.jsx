import React from 'react';
import styled from 'styled-components';

const moment = require('moment');

const Date = styled.div`
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

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
    }
  handleClick() {
    // console.log(e);
    this.setState({show: !this.state.show})
  }

  render() {
    const { answer } = this.props;
    const { show } = this.state;
    let showMore;
    if(show) {
      showMore = <div></div>
    } else {
      {answer.slice(1).map((a) => {
        showMore = <div key={a.date_posted + a.username}>
            <p>{a.answer}</p>
            <Date>By {a.username}
              {' '}
              on
              {moment(a.date_posted).format('ll')}
              {/* <Arrow></Arrow>
              <a href="/">See more answers ({answer.length - 1})</a> */}
              </Date>
              </div>
              return showMore;
            })}

    }
    return (
      <div>
        <div>{answer[0].answer}</div>
              <Date>By {answer.username}
                {' '}
                on
                {moment(answer[0].date_posted).format('ll')}
              </Date>
              <div>
                  <Arrow></Arrow>
                  <a href="" onClick={this.handleClick}> See more answers ({answer.length - 1})</a>
              </div>
              {showMore}
      </div>
    );
  }
}

export default Answer;



