import React from 'react'

// tslint:disable-next-line:interface-name
interface PlusButtonProps {
  onClick?: any
}

const PlusButton: React.SFC<PlusButtonProps> = ({ onClick }) => (
  <button onClick={onClick}>+</button>
)

export default PlusButton
