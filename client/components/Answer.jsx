import React from 'react';
import styled from 'styled-components';

const moment = require('moment');

const Date = styled.p`
  color: #767676!important;
`;

const Answer = ({answer}) => {
  return (
    <div>
      {answer.map((a) =>{
        return (
          <div key={a.date_posted + a.username}>
            <p>{a.answer}</p>
            <Date>By {a.username}
              {' '}
              on {moment(a.date_posted).format('ll')}
            </Date>
          </div>
        )})}
    </div>
  );
};

export default Answer;
