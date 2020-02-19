import React, { Component } from 'react'

export class Total extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataTotal: 0,
    }
  }

  componentDidUpdate(prevProps) {
    let addToState = 0
    if (this.props.data !== prevProps.data) {
      this.props.data.map(item => {
        addToState += item.value
      })
      this.setState({ dataTotal: addToState })
    }
  }

  render() {
    return (
      <div>
        <p>Total: {this.state.dataTotal}</p>
      </div>
    )
  }
}

export default Total
