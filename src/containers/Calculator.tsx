import * as React from 'react'
import { connect } from 'react-redux'

import { onNumClick, onPlusClick } from '../modules/calculator'

import CalcResult from '../components/CalcResult'
import NumberButton from '../components/NumberButton'
import PlusButton from '../components/PlusButton'

class Calculator extends React.Component<any, any> {
  public render() {
    // tslint:disable-next-line:no-shadowed-variable
    const { calculator, onNumClick, onPlusClick } = this.props
    return (
      <div>
        <div>
          <NumberButton
            n={1}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => onNumClick(1)}
          />
          <NumberButton
            n={2}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => onNumClick(2)}
          />
          <NumberButton
            n={3}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => onNumClick(3)}
          />
        </div>
        <div>
          <NumberButton
            n={4}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => onNumClick(4)}
          />
          <NumberButton
            n={5}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => onNumClick(5)}
          />
          <NumberButton
            n={6}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => onNumClick(6)}
          />
        </div>
        <div>
          <NumberButton
            n={7}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => onNumClick(7)}
          />
          <NumberButton
            n={8}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => onNumClick(8)}
          />
          <NumberButton
            n={9}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => onNumClick(9)}
          />
        </div>
        <div>
          <NumberButton
            n={0}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => onNumClick(0)}
          />
          <PlusButton onClick={onPlusClick} />
        </div>
        <div>
          <CalcResult
            result={
              calculator.showingResult
                ? calculator.resultValue
                : calculator.inputValue
            }
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  calculator: state.calculator
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onNumClick: (n: number) => dispatch(onNumClick(n)),
  onPlusClick: () => dispatch(onPlusClick())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)
