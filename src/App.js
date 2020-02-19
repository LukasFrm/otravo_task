import React, { Component } from 'react'
import Total from './components/Total'
import Counter from './components/Counter'
import './App.scss'
import AltCounter from './components/AltCounter'

export class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      data: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 },
      ],
    }
  }

  onDecrement = (id, decValue) => {
    this.setState(state => {
      const data = state.data.map(item => {
        if (id === item.id) {
          return { id: item.id, value: item.value - decValue }
        }
        return item
      })
      return {
        data,
      }
    })
  }

  onIncrement = (id, incValue) => {
    this.setState(state => {
      const data = state.data.map(item => {
        if (id === item.id) {
          return { id: item.id, value: item.value + incValue }
        }
        return item
      })
      return {
        data,
      }
    })
  }

  onChange = (id, value) => {
    this.setState(state => {
      const data = state.data.map(item => {
        if (id === item.id) {
          return { id: item.id, value: item.value + value }
        }
        return item
      })
      return {
        data,
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.data.map(counter => (
          <React.Fragment>
            {this.state.data.id !== 5 ? (
              <Counter
                key={counter.id}
                value={counter.value}
                onDecrement={decValue => this.onDecrement(counter.id, decValue)}
                onIncrement={incValue => this.onIncrement(counter.id, incValue)}
              />
            ) : (
              <AltCounter
                key={5}
                value={0}
                onChange={decValue => this.onChange(decValue)}
              />
            )}
          </React.Fragment>
        ))}

        <Total data={this.state.data} />
      </div>
    )
  }
}

export default App
