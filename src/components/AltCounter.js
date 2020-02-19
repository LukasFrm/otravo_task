import React, { Component } from 'react'

export class AltCounter extends Component {
  render() {
    const { value, onChange } = this.props
    return (
      <div className="counter test">
        <p>Alternative counter: </p>
        <b>{value}</b>
        <div className="counter-controls">
          <button
            className="button btn-danger btn-sm"
            onClick={() => onChange(-1)}
          >
            -
          </button>
          <button
            className="button btn-success btn-sm"
            onClick={() => onChange(1)}
          >
            +
          </button>
        </div>
      </div>
    )
  }
}

export default AltCounter
