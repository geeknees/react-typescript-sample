import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux'

import logger from 'redux-logger'

import App from './containers/App'
import Calculator from './containers/Calculator'
import Counter from './containers/Counter'
import './index.css'

import modules from './modules'
const store = createStore(
  modules,
  applyMiddleware(logger)
)
const rootEl = document.getElementById('root')
import registerServiceWorker from './registerServiceWorker'

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <div className='container'>
        <App />
        <Counter />
        <Calculator />
      </div>
    </Provider>,
    rootEl
  )

render()
registerServiceWorker()
