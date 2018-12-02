import * as React from 'react'

import CalcResult from '../components/CalcResult';
import NumberButton from '../components/NumberButton';
import PlusButton from '../components/PlusButton';

class Calculator extends React.Component<any, any> { 
  public render() {
    return (
      <div>
        <div>
           <NumberButton n={1} />
           <NumberButton n={2} />
           <NumberButton n={3} />
         </div>
         <div>
           <NumberButton n={4} />
           <NumberButton n={5} />
           <NumberButton n={6} />
         </div>
         <div>
           <NumberButton n={7} />
           <NumberButton n={8} />
           <NumberButton n={9} />
         </div>
         <div>
          <NumberButton n={0} />
          <PlusButton />
         </div>
         <div>
            <CalcResult />
        </div>
      </div>
    );
  }
}

export default Calculator
