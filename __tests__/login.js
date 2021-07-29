import React from 'react';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-canvas-mock';
import fetch from 'node-fetch';
import toJson from 'enzyme-to-json';



import SignIn from '../client/SignIn';
// import Home from '../client/Home';
import Questionnaire from '../client/Questionnaire'

configure({ adapter: new Adapter() });

describe('check if the login page is pretty', () => {
  it('renders the component', () => {
    shallow(<SignIn />);
  });
})