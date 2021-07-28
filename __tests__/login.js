import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import SignIn from '../client/SignIn';

configure({ adapter: new Adapter() });

describe('check if the login page is pretty', () => {
  it('renders the component', () => {
    shallow(<SignIn />);
  });
})