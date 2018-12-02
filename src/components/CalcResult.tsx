import React from 'react'

// tslint:disable-next-line:interface-name
interface CalcResultProps {
  result?: number
}

const CalcResult: React.SFC<CalcResultProps> = ({ result }) => (
  <div>
    Result: <span>{result}</span>
  </div>
)

export default CalcResult
