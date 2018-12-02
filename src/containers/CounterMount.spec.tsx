import { mount } from 'enzyme'
import * as React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Counter from './Counter'

const setup = (setupProps = {}) => {
  const store = configureStore()({ counter: 0 });
  const wrapper = mount(
    <Provider store={store}>
      <Counter />
    </Provider>
  )
  return {
    store,
    // tslint:disable-next-line:object-literal-sort-keys
    p: wrapper.find('p')
  }
}

describe('Counter container', () => {
  it('should display count', () => {
    const { p } = setup()
    expect(p.text()).toMatch(/^Clicked: 0 times/)
  })
})
