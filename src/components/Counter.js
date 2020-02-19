import React, { Component } from 'react'

export class Counter extends Component {
 
  
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div className="counter test">
        <b>{value}</b>
        <div className="counter-controls">
          <button
            className="button btn-danger btn-sm"
            onClick={() => onDecrement(1)}
          >
            -
          </button>
          <button
            className="button btn-success btn-sm"
            onClick={() => onIncrement(1)}
          >
            +
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
