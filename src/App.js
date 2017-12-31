import React, { Component } from 'react'
import './App.css'
import Chart from './Chart'
import pi from './piMillion'

const initializeData = () =>
  Array(10)
    .fill()
    .map((_, i) => ({ name: i, tally: 0 }))

class App extends Component {
  constructor() {
    super()
    this.state = { data: initializeData() }
    // console.log(this.state)
  }
  componentDidMount() {
    let i = 0
    const f = i => () => {
      const d = this.genPi(i)
      this.update(d)
      // this.updateHistogram(d)
      // this.updatePiConsec(i)
    }
    while (i <= 100000) {
      setTimeout(f(i), 1 * i)
      i++
    }
  }
  genPi = i => parseInt(pi.charAt(i), 10)
  genPiDiff = i => parseInt(pi.charAt(i + 1), 10) - parseInt(pi.charAt(i), 10)
  updatePiConsec = i => {
    // console.log(i)
    if (!this.genPiDiff(i)) this.updateHistogram(this.genPi(i))
  }
  update = n => {
    console.log(n)
    const { data } = this.state
    console.log(data.filter(({ name }) => name === n))
    const updated = data.map(
      ({ name, tally }) =>
        name === n ? { name, tally: tally + 1 } : { name, tally }
    )
    this.setState({ data: updated })
  }
  updateHistogram = n => {
    const { data } = this.state
    const updated = data
      .map(
        ({ name, tally }) =>
          name === n ? { name, tally: tally + 1 } : { name, tally }
      )
      .sort((a, b) => a.tally - b.tally)
    this.setState({ data: updated })
  }
  render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pi over time</h1>
        </header>
        <Chart data={data} />
      </div>
    )
  }
}

export default App
