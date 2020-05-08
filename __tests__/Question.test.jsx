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
      />,
    );
    expect(wrapper).toExist();
  });

  it("renders correctly", () => {
    const wrapper = shallow(
      <Question
        question={sampleQuestion}
        url={sampleURL}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Expect a tag to render the correct question', () => {
    const wrapper = mount(
      <Question
        question={sampleQuestion}
        url={sampleURL}
      />,
    );
    const value = wrapper.find('a').text();
    expect(value).toEqual('tan Center Kansas Comoro Franc Developer sky blue Wooden open-source Designer Lead?');
  });

  it ('accepts question and URL props', () => {
    const wrapper = mount(
      <Question
        question={sampleQuestion}
        url={sampleURL}
      />,
    );
    expect(wrapper.props().question).toEqual(sampleQuestion);
    expect(wrapper.props().url).toEqual(sampleURL);
  });
});
