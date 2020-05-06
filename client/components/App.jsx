/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Votes from './Votes.jsx';

const axios = require('axios');


const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Amazon Ember";
  src: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_rg-cc7ebaa05a2cd3b02c0929ac0475a44ab30b7efa._V2_.woff2");
}
@font-face {
  font-family: "Amazon Ember";
  font-weight: 700;
  src: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_bd-46b91bda68161c14e554a779643ef4957431987b._V2_.woff2");
}
`;
const Wrapper = styled.div`
  font-size: 13px;
  line-height: 19px;
  color: #111;
  font-family: "Amazon Ember",Arial,sans-serif;
  box-sizing:border-box;
  color:rgb(17, 17, 17);
  display:block;
  height:144px;
  line-height:19px;
  margin-bottom:14px;
  overflow-wrap:break-word;
  position:relative;
  text-size-adjust:100%;
  width:800px;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
    this.changeVotes = this.changeVotes.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.slice(1, -1);
    this.fetchData(id);
  }

  fetchData(id) {
    axios.get(`/questions/${id}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeVotes(vote, id, productId) {
    axios.patch('/questions', { vote, id })
      .then((response) => {
        this.fetchData(Number(productId));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { questions } = this.state;
    return (
      <Wrapper>
        <GlobalStyle />
        <Votes data={questions} changeVote={this.changeVotes} />
      </Wrapper>
    );
  }
}

export default App;
