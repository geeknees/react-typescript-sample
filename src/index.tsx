import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import App from './containers/App'
import Counter from './containers/Counter'
import './index.css'

import modules from './modules'
const store = createStore(modules)
const rootEl = document.getElementById('root')
import registerServiceWorker from './registerServiceWorker'

const render = () => ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <Counter/>
    </div>
  </Provider>,
  rootEl
)

render()
registerServiceWorker()