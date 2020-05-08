import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App';


describe('Unit Tests for App', () => {
  // jest.mock('axios', () => {
  //   const data = [{
  //     "_id" : "5eb0aa58fdb2ea2b7daec7f3",
  //     "answers" : [
  //       {
  //         "username" : "Ahmad.Bruen",
  //         "answer" : "Ergonomic green workforce Row 24/365 initiative Divide JBOD Money Market Account circuit Ergonomic Wooden Shoes Ergonomic backing up Handcrafted Radial wireless hub optical Up-sized Aruba",
  //         "date_posted" : "2019-12-07T17:14:54.404Z",
  //       },
  //       {
  //         "username" : "Vivien75",
  //         "answer" : "Automated deposit silver Strategist Division Berkshire Business-focused Montana deposit Bahamas Rustic Plastic relationships integrated Oklahoma collaborative Chips reboot primary Lebanese Pound",
  //         "date_posted" : "2019-10-24T15:58:43.321Z",
  //       }
  //     ],
  //     "product_id" : "068",
  //     "questions" : "tan Center Kansas Comoro Franc Developer sky blue Wooden open-source Designer Lead",
  //     "question_url" : "http://larissa.name",
  //     "votes" : 26,
  //     "__v" : 0,
  //   }];

  //   return {
  //     get: jest.fn(() => Promise.resolve(data)),
  //   };
  // });

  test('should render the App component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
  test('should invoke fetchData method on componentDidMount', () => {
    const wrapper = shallow(<App />);
    const mock = jest.fn();
    wrapper.instance().fetchData = mock;
    wrapper.instance().forceUpdate();
    wrapper
      .instance()
      .componentDidMount();
    expect(mock).toHaveBeenCalled();
  });
});
