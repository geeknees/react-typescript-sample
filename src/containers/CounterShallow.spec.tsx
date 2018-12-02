import { shallow } from 'enzyme'
import * as React from 'react'
import configureStore from 'redux-mock-store'

import Counter from './Counter'

const setup = (setupProps = {}) => {
  const store = configureStore()({ counter: 0 })
  const wrapper = shallow(<Counter store={store} />)
  return {
    store,
    wrapper
  }
}

describe('Counter container', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup()
    expect(wrapper).toMatchSnapshot()
  })
})
