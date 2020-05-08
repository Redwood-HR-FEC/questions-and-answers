import React from 'react';
import { shallow } from 'enzyme';
import Votes from '../client/components/Votes';
import Question from '../client/components/Question';

const sampleData = [
  {
    "_id" : "5eb0aa58fdb2ea2b7daec7f3",
    "answers" : [
      {
        "username" : "Ahmad.Bruen",
        "answer" : "Ergonomic green workforce Row 24/365 initiative Divide JBOD Money Market Account circuit Ergonomic Wooden Shoes Ergonomic backing up Handcrafted Radial wireless hub optical Up-sized Aruba",
        "date_posted" : "2019-12-07T17:14:54.404Z",
      },
      {
        "username" : "Vivien75",
        "answer" : "Automated deposit silver Strategist Division Berkshire Business-focused Montana deposit Bahamas Rustic Plastic relationships integrated Oklahoma collaborative Chips reboot primary Lebanese Pound",
        "date_posted" : "2019-10-24T15:58:43.321Z",
      }
    ],
    "product_id" : "068",
    "questions" : "tan Center Kansas Comoro Franc Developer sky blue Wooden open-source Designer Lead",
    "question_url" : "http://larissa.name",
    "votes" : 26,
    "__v" : 0
  },
];

describe('Unit test for Votes component', () => {
  test('should render votes, answers and questions', () => {
    const wrapper = shallow(
      <Votes
        data={sampleData}
        changeVote={() => {}}
      />
    );
    expect(wrapper).toExist();
  });

  it ('accepts ussampleDataer props', () => {
    const wrapper = mount(
      <Votes
        data={sampleData}
        changeVote={() => {}}
      />,
    );
    expect(wrapper.props().data).toEqual(sampleData);
  });

  it("renders correctly", () => {
    const wrapper = shallow(
      <Votes
        data={sampleData}
        changeVote={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Mouse events', () => {
  test('mouseclick methods to be instance of Votes', () => {
    const wrapper = shallow(
      <Votes
        data={sampleData}
        changeVote={() => {}}
      />,
    );
    wrapper.instance().handleUpvotes();
    wrapper.instance().handleDownvotes();
  });

  test('should update votes  when click li tag', () => {
    const mockChangeVote = jest.fn();
    const wrapper = mount(
      <Votes
        data={sampleData}
        changeVote={mockChangeVote}
      />,
    );
    const liTagUp = wrapper.find('img').first();
    liTagUp.simulate('click');
    expect(mockChangeVote).toHaveBeenCalled();

    const liTagDown = wrapper.find('img').last();
    liTagDown.simulate('click');
    expect(mockChangeVote).toHaveBeenCalled();
  });

  // test('should update votes -1 when click vote down li tag', () => {
  //   const mockChangeVote = jest.fn();
  //   const wrapper = mount(
  //     <Votes
  //       data={sampleData}
  //       changeVote={mockChangeVote}
  //     />,
  //   );
  //   const liTag = wrapper.find('img').last();
  //   liTag.simulate('click');
  //   expect(mockChangeVote).toHaveBeenCalled();
  // });
});

describe('Unit test for Question component', () => {
  const sampleQuestion = 'tan Center Kansas Comoro Franc Developer sky blue Wooden open-source Designer Lead';
  const sampleURL = 'http://larissa.name';
  test('should render 1 question', () => {
    const wrapper = shallow(
      <Question
        question={sampleQuestion}
        url={sampleURL}
      />
    );
    expect(wrapper).toHaveLength(1);
  });
});
