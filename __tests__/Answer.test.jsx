import React from 'react';
import { shallow } from 'enzyme';
import Answer from '../client/components/Answer';


const sampleAnswers = [
  {
    "username" : "Ahmad.Bruen",
    "answer" : "Ergonomic green workforce Row 24/365 initiative Divide JBOD Money Market Account circuit Ergonomic Wooden Shoes Ergonomic backing up Handcrafted Radial wireless hub optical Up-sized Aruba",
    "date_posted" : "2019-12-07T17:14:54.404Z",
  },
  {
    "username" : "Vivien75",
    "answer" : "Automated deposit silver Strategist Division Berkshire Business-focused Montana deposit Bahamas Rustic Plastic relationships integrated Oklahoma collaborative Chips reboot primary Lebanese Pound",
    "date_posted" : "2019-10-24T15:58:43.321Z",
  },
];

describe('Unit test for Answer component', () => {
  test('Answer component should exists', () => {
    const wrapper = shallow(
      <Answer
        answer={sampleAnswers}
      />,
    );
    expect(wrapper).toExist();
  });

  it("renders correctly", () => {
    const wrapper = shallow(
      <Answer
        answer={sampleAnswers}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Toggle See more', () => {

  test('mouseclick methods', () => {
    const wrapper = shallow(
      <Answer
        answer={sampleAnswers}
      />,
    );
    wrapper.instance().handleClick();
    wrapper.instance().handleCollapse();
  });

  it('should expand to show more items when the See more items is clicked', () => {
    const wrapper = shallow(
      <Answer
        answer={sampleAnswers}
      />,
    );
    // Testing Initial State before a click event
    expect(wrapper.state("open")).toBe(false);
  });

  it ('accepts sampleAnswers props', () => {
    const wrapper = mount(
      <Answer
        answer={sampleAnswers}
      />,
    );
    expect(wrapper.props().answer).toEqual(sampleAnswers);
  });
});
