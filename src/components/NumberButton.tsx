import React from 'react'

// tslint:disable-next-line:interface-name
interface NumberButtonProps {
  n?: number,
  onClick?: any
}

const NumberButton: React.SFC<NumberButtonProps> = ({ n, onClick }) => (
  <button onClick={onClick}>{n}</button>
)

export default NumberButton
