import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as calculatorModule from '../modules/calculator';

import NumberButton from '../components/NumberButton';
import PlusButton from '../components/PlusButton';
import CalcResult from '../components/CalcResult';


class Calculator extends Component {
  render() {
    const { calculator, actions } = this.props;
    return (
      <div>
        <div>
          <NumberButton n={1} onClick={() => actions.onNumClick(1)} />
          <NumberButton n={2} onClick={() => actions.onNumClick(2)} />
          <NumberButton n={3} onClick={() => actions.onNumClick(3)} />
        </div>
        <div>
          <NumberButton n={4} onClick={() => actions.onNumClick(4)} />
          <NumberButton n={5} onClick={() => actions.onNumClick(5)} />
          <NumberButton n={6} onClick={() => actions.onNumClick(6)} />
        </div>
        <div>
          <NumberButton n={7} onClick={() => actions.onNumClick(7)} />
          <NumberButton n={8} onClick={() => actions.onNumClick(8)} />
          <NumberButton n={9} onClick={() => actions.onNumClick(9)} />
        </div>
        <div>
          <NumberButton n={0} onClick={() => actions.onNumClick(0)} />
          <PlusButton onClick={actions.onPlusClick()} />
        </div>
        <div>
          <CalcResult result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
        </div>
      </div>
    );
  }
}


const mapState = (state, ownProps) => ({
  calculator: state.calculator,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(calculatorModule, dispatch),
  };
}

export default connect(mapState, mapDispatch)(Calculator);