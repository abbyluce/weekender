import './App.css'
import React, { Component } from 'react'
import Landing from '../Landing/Landing'
import FeaturedTrip from '../FeaturedTrip/FeaturedTrip'
import TripContainer from '../TripContainer/TripContainer'
import Details from '../Details/Details'
import NavBar from '../NavBar/NavBar'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      trips: [],
      error: false,
      errorMessage: null
    }
  }

  fetchAllTrips = () => {
    fetch('https://weekender-api.herokuapp.com/api/v1/trips')
    .then(response => {
      if(!response.ok) {
        throw new Error()
      } else {
        this.setState({error: false})
        return response.json()
      }
    })
    .then(data => {
      this.setState({trips: data.trips})
    })
    .catch(error => {
      this.setState({error: true, errorMessage: 'Error 404. The data could not be fetched. Please reload and try again'})
    })
  }

  componentDidMount = () => {
    this.fetchAllTrips();
  }


  render() {
    return(
      <div>
        <Route exact path="/" render={() => {
          return (
          <div>
            <Landing /> 
            <FeaturedTrip /> 
          </div>) }} />
        <Route exact path="/all-trips" render={() => {
          return (
            <div>
              <NavBar />
              <TripContainer trips={this.state.trips}/> 
            </div>
          )}} />
          <Route exact path="/:id" render={({match}) => {
          const clickedTrip = this.state.trips.find(trip => trip.id === match.params.id)
          return <Details trip={clickedTrip}/>
        }} />
      </div>
    )
  }
}

export default App
