import { combineReducers } from 'redux'
import calculator from './calculator'
import counter from './counter'

const reducer = combineReducers({
  calculator,
  counter
})

export default reducer
