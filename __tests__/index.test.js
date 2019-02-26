import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import App from '../pages/index.js'
const mockStore = configureMockStore();
const store = mockStore({
  weather: {
    current: {}
  }
});

describe('With Enzyme', () => {
  it('App show main page', () => {
    const app = shallow(<App />)
    expect(app.find('div')).toBeTruthy();
  })
});

describe('With Snapshot Testing', () => {
  it('App show main page', () => {
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
});
