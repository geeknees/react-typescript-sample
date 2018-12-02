import * as React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  public incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  public incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  public render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times <button onClick={onIncrement}>+</button>{' '}
        <button onClick={onDecrement}>-</button>{' '}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>{' '}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    )
  }
}

const mapStateToProps = (state: any) => ({
  value: state.counter
})

const mapDispatchToProps = (dispatch: any) => ({
  onIncrement: () => {
    dispatch({ type: 'INCREMENT' })
  },
  // tslint:disable-next-line:object-literal-sort-keys
  onDecrement: () => {
    dispatch({ type: 'DECREMENT' })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
