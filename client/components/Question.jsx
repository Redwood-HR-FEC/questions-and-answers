import React from 'react';
import styled from 'styled-components';

const QuestionWrapper = styled.div`
  margin-bottom: 10px!important;
`;

const ATag = styled.a`
  color:rgb(0, 102, 192);
  text-decoration-line:none;
  text-decoration-style:solid;

  &:hover {
    color:rgb(196, 85, 0);
    text-decoration-line:underline;
    text-decoration-style:solid;
  }
`;

const Question = ({ question, url }) => {
  return (
    <QuestionWrapper>
      <ATag href={url}>
        { question }
        ?
      </ATag>
    </QuestionWrapper>
  );
};

export default Question;
