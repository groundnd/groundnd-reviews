import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App.jsx';
import { doesNotReject } from 'assert';

describe('App component rendering', () => {
  it('should render App component w/o throwing an error', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  // it('should contain a TotalReviews component', () => {
  //   let wrapper = shallow(<App />);
  //   expect(wrapper.find('TotalReviews').exists()).toBe(true);
  // });

  // it('should contain a Search component', () => {
  //   let wrapper = shallow(<App />);
  //   expect(wrapper.find('Search').exists()).toBe(true);
  // });

  // it('should contain a Ratings component', () => {
  //   let wrapper = shallow(<App />);
  //   expect(wrapper.find('Ratings').exists()).toBe(true);
  // });

  it('should contain a Reviews component', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('Reviews').exists()).toBe(true);
  });
});

describe('App: componentDidMount', () => {
  it('componentDidMount should be only called once', () => {
    let componentDidMountSpy = spyOn(App.prototype, 'componentDidMount');
    let wrapper = shallow(<App />);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
  });

  it('state should be populated after componentDidMount runs', () => {
    const component = shallow(<App />);
    expect(component.state('reviews').length).not.toEqual(4);
  });

  // it('state should be populated after componentDidMount runs', () => {
  //   let component = shallow(<App />);
  //   expect.extend({
  //     async (){
  //       let reviewsData = await component.state('reviews').length;
  //       expect(reviewsData).not.toEqual(0);
  //     }
  //   });
  //   // component.state('reviews').length.not.toEqual(0);
  // });

  // test('state should be populated after componentDidMount runs', async () => {
  //   expect.assertions(1);
  //   let component = shallow(<App />);
  //   let reviewsData = await component.state('reviews').length;
  //   expect(reviewsData).not.toEqual(0);
  // });
  // test('state should be populated after componentDidMount runs', async () => {
  //   expect.assertions(1);
  //   let wrapper = shallow(<App />);
  //   await wrapper.instance().componentDidMount();

  //   let reviewsData = wrapper.instance().state('reviews').length;
  //   expect(reviewsData).not.toEqual(0);
  // });
  // test('state should be populated after componentDidMount runs', async () => {
  //   const wrapper = shallow(<App />);
  //   const data = await wrapper.state('reviews').length;
  //   expect(data).not.toEqual(0);
  // });

});
