import React from 'react';
import { shallow } from 'enzyme';
import Question from '../client/components/Question';

describe('Unit test for Question component', () => {
  const sampleQuestion = 'tan Center Kansas Comoro Franc Developer sky blue Wooden open-source Designer Lead';
  const sampleURL = 'http://larissa.name';

  test('should render questions', () => {
    const wrapper = shallow(
      <Question
        question={sampleQuestion}
        url={sampleURL}
      />
    );
    expect(wrapper).toExist();
  });
});
