import React from 'react';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-canvas-mock';
import fetch from 'node-fetch';
import toJson from 'enzyme-to-json';

import SignIn from '../client/components/SignIn';
import { Home } from '../client/components/Home';
import { NavLink } from 'react-router-dom'; 
import { Rankings } from '../client/components/Rankings';
import { Profile } from '../client/components/Profile';
import { About } from '../client/components/About';
import Questionnaire from '../client/components/Questionnaire'

configure({ adapter: new Adapter() });

describe('check if the Login has everything', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<SignIn/>);
  });
  it('renders the component', () => {
    expect(wrapper).toExist();
    expect(wrapper).toMatchElement(<SignIn />);
  });
  it('is a div that contains an h1 tag and an a tag', ()=>{
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.find('a')).toExist()
    expect(wrapper.find('h1')).toExist()
  })
  it('has the correct inner text',()=>{
    expect(wrapper.find('h1').text()).toBe('Green Score')
    expect(wrapper.find('a').text()).toBe('log in with google')
  })
})

describe('check if Home has everything',()=>{
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Home/>);
  });
  it('renders the component',()=>{
    expect(wrapper).toExist();
    expect(wrapper).toMatchElement(<Home/>);
 })
  it('is a div that contains an inner div', ()=>{
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.text()).toBe("<Rankings /><Profile />")
  })
});

describe('check if About has everything',()=>{
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<About/>);
  });
  it('renders the component',()=>{
    expect(wrapper).toExist();
    expect(wrapper).toMatchElement(<About/>);
  });
  it('is a div that contains an a button and two images', ()=>{
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.find('img')).toExist()
    expect(wrapper.find('button')).toExist()
    expect(wrapper.find('button').text()).toBe('Join us on our journey to reduce carbon emissions')
  });
// xit('increases the count by one onClick',()=>{
//   const count = 
// })


});

  describe('check if Rankings has everything',()=>{
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<Rankings />);
    });
    it('renders the component',()=>{
      expect(wrapper).toExist();
      expect(wrapper).toMatchElement(<Rankings />);
    });
    it('renders a header', () => {
      expect(wrapper.find('header')).toExist();
      expect(wrapper.find('header').find('h1')).toExist();
      expect(wrapper.find('header').find('h1').text()).toBe('Greenest Users');

    })
    it('renders a table with header and rows', () => {
      expect(wrapper.find('table')).toExist();
      expect(wrapper.find('table').find('thead')).toExist();
      expect(wrapper.find('table').find('tr')).toExist();
    })
      
  });
  
  describe('check if Profile has everything',()=>{
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<Profile />);
    });
    it('renders the component with correct class',()=>{
      expect(wrapper).toExist();
      expect(wrapper).toMatchElement(<Profile />);
      expect(wrapper)
    });
    it('')
  });