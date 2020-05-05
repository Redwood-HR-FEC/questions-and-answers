import React from 'react';
import styled from 'styled-components';

const QuestionWrapper = styled.div`
  margin-bottom: 10px!important;
`;

const Question = ({ question, url }) => {
  return (
    <QuestionWrapper>
      <a href={url}>
        { question }
        ?
      </a>
    </QuestionWrapper>
  );
};

export default Question;
