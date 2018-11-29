import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Counter from './components/Counter'
import counter from './modules/counter'
const store = createStore(counter)
const rootEl = document.getElementById('root')

import App from './containers/App'
import './index.css'

import registerServiceWorker from './registerServiceWorker'

const render = () => ReactDOM.render(
  <div>
    <App />
    <Counter
      value={store.getState()}
      // tslint:disable-next-line:jsx-no-lambda
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      // tslint:disable-next-line:jsx-no-lambda
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />
  </div>,
  rootEl
)

render()
registerServiceWorker()
store.subscribe(render)