import './App.css'
import React, { Component } from 'react'
import Header from '../Header/Header'
import FeaturedTrip from '../FeaturedTrip/FeaturedTrip'

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     trips: []
  //   }
  // }

  render() {
    return(
      <div>
        <Header />
        <FeaturedTrip />
      </div>
    )
  }
}

export default App
