import React from 'react';
import { shallow } from 'enzyme';
import Search from '../client/components/Search';

describe('Unit test for Search component', () => {
  test('Search component should exists', () => {
    const wrapper = shallow(
      <Search />
    );
    expect(wrapper).toExist();
  });
});