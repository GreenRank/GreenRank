import React from 'react';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-canvas-mock';
import fetch from 'node-fetch';
import toJson from 'enzyme-to-json';

import SignIn from '../client/components/SignIn';
// import Home from '../client/Home';
import Questionnaire from '../client/components/Questionnaire'

configure({ adapter: new Adapter() });

describe('check if the login page is pretty', () => {
  let wrapper;
  beforeAll(() => {
     wrapper = shallow(<SignIn/>);
  });
  xit('renders the component', () => {
    expect(wrapper).toBe(<SignIn/>)
  });
  it('is a div that contains an h1 tag and an a tag', ()=>{
    expect(wrapper.type()).toEqual('div');
    expect(wrapper).find('a').toBe(true)
    // expect(wrapper).toContain('h1')
  })
})