// actions

export const INPUT_NUMBER = 'INPUT_NUMBER'
export const PLUS = 'PLUS'

export const onNumClick = (numbers: number) => ({
  numbers,
  type: INPUT_NUMBER
})

export const onPlusClick = () => ({
  type: PLUS
})

const initialAppState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false
}

// reducers

const calculator = (state = initialAppState, action: any) => {
  if (action.type === INPUT_NUMBER) {
    return {
      ...state,
      inputValue: state.inputValue * 10 + action.numbers,
      showingResult: false
    }
  } else if (action.type === PLUS) {
    return {
      ...state,
      inputValue: 0,
      resultValue: state.resultValue + state.inputValue,
      showingResult: true
    }
  } else {
    return state
  }
}

export default calculator
