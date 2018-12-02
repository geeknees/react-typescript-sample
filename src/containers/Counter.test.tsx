import { mount } from 'enzyme'
import * as React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Counter from './Counter'

function setup() {
  const initialState = { counter: 0 }
  // here it is possible to pass in any middleware if needed into //configureStore
  const mockStore = configureStore()
  const component = mount(
    <Provider store={mockStore(initialState)}>
      <Counter />
    </Provider>
  )
  return {
    component,
    // tslint:disable-next-line:object-literal-sort-keys
    buttons: component.find('button'),
    p: component.find('p')
  }
}

describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup()
    expect(p.text()).toMatch(/^Clicked: 0 times/)
  })
})
