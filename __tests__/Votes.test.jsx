import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Votes from '../client/components/Votes';
import Question from '../client/components/Question';
import Answer from '../client/components/Answer';

const sampleData = [
  {
    "_id" : ("5eb0aa58fdb2ea2b7daec7e8"),
    "answers" : [
      {
        "username" : "Hayley25",
        "answer" : "Home Loan Account Handmade full-range Designer Fish Devolved Senior Incredible Steel Tuna Haven Pre-emptive Customer Tasty Philippine Peso payment Officer even-keeled embrace Books transmitter matrix",
        "date_posted" : "2019-06-30T19:50:33.238Z"
      },
      {
        "username" : "Dennis.Sawayn68",
        "answer" : "Licensed Tuna West Virginia Congolese Franc digital Outdoors scalable indexing Avon microchip Gorgeous Steel Car withdrawal gold whiteboard panel Cambridgeshire Zloty Computers benchmark Gloves",
        "date_posted" : "2019-06-20T18:40:19.282Z"
      },
      {
        "username" : "Parker.Goodwin",
        "answer" : "Libyan Arab Jamahiriya Small Underpass Games Handcrafted Cotton Mouse Executive groupware Optional Functionality Chair connect override dynamic CFA Franc BEAC system engine Chicken port lavender partnerships Investor",
        "date_posted" : "2019-12-27T00:09:31.414Z"
      },
      {
        "username" : "Elinor37",
        "answer" : "primary back-end Handcrafted Plastic Table bus Computers aggregate azure 6th generation Singapore Future Representative infomediaries virtual Savings Account strategize incubate neural Central Maine Chair",
        "date_posted" : "2019-10-26T11:22:17.064Z"
      },
      {
        "username" : "Gennaro_Hauck",
        "answer" : "Frozen Face to face Pakistan Rupee Assimilated Open-architected JSON Lebanon primary Handmade Bedfordshire Kuwaiti Dinar connecting sticky Chair Kip 1080p compress Investment Account Armenian Dram Security",
        "date_posted" : "2019-12-06T16:59:10.145Z"
      }
    ],
    "product_id" : "009",
    "questions" : "payment sensor Principal programming dynamic Concrete deposit Hat knowledge base communities",
    "question_url" : "http://peyton.net",
    "votes" : 51,
    "__v" : 0
  },
  {
    "_id" : ("5eb0aa58fdb2ea2b7daec7ff"),
    "answers" : [
      {
        "username" : "Laurie33",
        "answer" : "Investment Account Sleek user-facing deliverables payment Somali Shilling Ergonomic feed driver hard drive connect Concrete attitude-oriented Heard Island and McDonald Islands Consultant online generating bypass Cambridgeshire front-end",
        "date_posted" : "2019-10-11T08:01:52.377Z"
      }
    ],
    "product_id" : "009",
    "questions" : "Fantastic microchip Shoes cross-media Small Plastic Pizza incubate invoice Wooden Run lavender",
    "question_url" : "https://toni.com",
    "votes" : 48,
    "__v" : 0
  },
  {
    "_id" : ("5eb0aa58fdb2ea2b7daec810"),
    "answers" : [
      {
        "username" : "Samanta.Haley18",
        "answer" : "Texas Steel Licensed Rubber Car withdrawal Kroon orchid virtual Cambridgeshire connect Strategist copying Baby Personal Loan Account Clothing JBOD SDD Steel Generic Granite Towels Personal Loan Account Specialist",
        "date_posted" : "2019-08-16T23:49:56.574Z"
      },
      {
        "username" : "Marguerite_Zboncak23",
        "answer" : "Borders Bedfordshire invoice Seamless Metal out-of-the-box Industrial Steel viral leading-edge Syrian Pound Concrete Practical Soft Shirt Computers calculating Fords virtual magenta efficient Sleek",
        "date_posted" : "2019-11-08T06:01:46.631Z"
      },
      {
        "username" : "Nakia_Stroman0",
        "answer" : "maximize facilitate Shoes Open-source Texas deposit primary Ergonomic Concrete Pants standardization deposit monitor Avon Producer bandwidth synergy Handmade Functionality infomediaries redundant Universal",
        "date_posted" : "2019-12-09T14:30:27.831Z"
      }
    ],
    "product_id" : "009",
    "questions" : "HTTP Mayotte Handmade Concrete Ball Integration program Refined Granite Chair reciprocal metrics Representative Intelligent Rubber Chicken",
    "question_url" : "http://cornell.name",
    "votes" : 8,
    "__v" : 0
  },
  {
    "_id" : "5eb0aa58fdb2ea2b7daec841",
    "answers" : [
      {
        "username" : "Ed.Prosacco",
        "answer" : "red Bike Plastic customized system ivory Row Berkshire SAS Rubber pink models multi-state Soft Bedfordshire Incredible Granite Soap cohesive reboot bypassing Universal",
        "date_posted" : "2019-10-28T14:02:08.617Z"
      },
      {
        "username" : "Penelope.Smith33",
        "answer" : "Checking Account Unbranded Handcrafted Intranet interactive paradigms global Team-oriented Orchestrator Rand Loti Cyprus American Samoa Netherlands Antilles withdrawal bus olive Tasty Lesotho Soft Technician",
        "date_posted" : "2019-11-30T02:21:08.791Z"
      },
      {
        "username" : "Ofelia76",
        "answer" : "programming core Concrete Beauty sexy Practical Pants back-end Quality revolutionize global port Awesome Rubber Computer Direct Program national Savings Account Field Knolls online",
        "date_posted" : "2020-05-03T18:22:58.403Z"
      },
      {
        "username" : "Harmony82",
        "answer" : "Liaison Rapids Common Industrial payment withdrawal compress Grocery neural port Nevada Shoes Trail Chips program payment Towels dot-com Rand deposit",
        "date_posted" : "2019-09-02T18:20:37.226Z"
      }
    ],
    "product_id" : "009",
    "questions" : "parsing infrastructures back up bluetooth transmitter withdrawal Gorgeous Plastic Gloves Internal core Kenyan Shilling",
    "question_url" : "https://rebecca.info",
    "votes" : 92,
    "__v" : 0
  },
  {
    "_id" : ("5eb0aa58fdb2ea2b7daec88e"),
    "answers" : [
      {
        "username" : "Rose_Keebler",
        "answer" : "synthesize Jewelery Granite navigate turn-key SCSI Human CSS Democratic People's Republic of Korea hack client-driven neural Handmade Rustic Soft Sausages Grenada blue invoice Sports Utah revolutionary",
        "date_posted" : "2020-04-17T22:26:18.785Z"
      }
    ],
    "product_id" : "009",
    "questions" : "virtual bypass primary deposit bandwidth program International Handmade Tactics Principal",
    "question_url" : "http://emory.name",
    "votes" : 44,
    "__v" : 0
  },
];

describe('Unit test for Votes component', () => {
  test('should render votes, answers and questions', () => {
    const wrapper = shallow(
      <Votes
        data={sampleData}
        changeVote={() => {}}
      />,
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
  test('mouseover event, should change image source', () => {
    const wrapper = mount(
      <Votes
        data={sampleData}
        changeVote={() => {}}
      />,
    );

    wrapper.find('img').first().simulate('mouseleave');
    expect(wrapper.find('img').first().prop('src')).toEqual('https://m.media-amazon.com/images/G/01/x-locale/communities/discussion_boards/neutral_up_arrow._CB442978120_.png');
  });

  test('mouseclick methods to be instance of Votes', () => {
    const wrapper = shallow(
      <Votes
        data={sampleData}
        changeVote={() => {}}
      />,
    );
    wrapper.instance().handleUpvotes(sampleData.id, sampleData.votes, sampleData.product_id);
    wrapper.instance().handleDownvotes();
    // wrapper.instance().handleUpvotes = jest.fn();

    // const liTagUp = wrapper.find('img').first();
    // liTagUp.simulate('click');
    // const spy = jest.spyOn(wrapper.instance(), 'handleUpvotes');
    // wrapper.instance().forceUpdate();
    // expect(wrapper.instance().handleUpvotes).toHaveBeenCalled(sampleData.id, sampleData.votes, sampleData.product_id);
  });

  test('should call changeVote when click li tag', () => {
    const mockChangeVote = jest.fn();
    const wrapper = mount(
      <Votes
        data={sampleData}
        changeVote={mockChangeVote}
      />,
    );
    const liTagUp = wrapper.find('img').first();
    liTagUp.simulate('click');
    expect(mockChangeVote).toHaveBeenCalled(sampleData.id, sampleData.votes, sampleData.product_id);

    const liTagDown = wrapper.find('img').last();
    liTagDown.simulate('click');
    expect(mockChangeVote).toHaveBeenCalled(sampleData.id, sampleData.votes, sampleData.product_id);
  });
});

describe('Unit test for Question component', () => {
  const sampleQuestion = 'tan Center Kansas Comoro Franc Developer sky blue Wooden open-source Designer Lead';
  const sampleURL = 'http://larissa.name';
  test('should render 1 question', () => {
    const wrapper = shallow(
      <Question
        question={sampleQuestion}
        url={sampleURL}
      />,
    );
    expect(wrapper).toHaveLength(1);
  });
});

describe('Toggle expansion bar', () => {
  test('methods should be an instance of Votes', () => {
    const wrapper = shallow(
      <Votes
        data={sampleData}
        changeVote={() => {}}
      />,
    );
    wrapper.instance().handleClick();
  });

  it('should expand to show more items when the See more answered questions is clicked', () => {
    const wrapper = mount(
      <Votes
        data={sampleData}
        changeVote={() => {}}
      />,
    );
    // Testing Initial State before a click event
    expect(wrapper.state('open')).toBe(false);

    // Testing state after click event
    wrapper.find('span').last().simulate('click');
    expect(wrapper.state("show")).toBeGreaterThan(4);
    expect(wrapper.state("open")).toBe(true);
  });
});

// describe('Unit test for Answer component', () => {
//   test('should render 1 question', () => {
//     const sampleAnswer = sampleData["answers"];
//     const wrapper = shallow(
//       <Answer
//         answer={sampleAnswer}
//       />,
//     );
//     expect(wrapper).toHaveLength(2);
//   });
// });
