import './App.css'
import React, { Component } from 'react'
import Landing from '../Landing/Landing'
import FeaturedTrip from '../FeaturedTrip/FeaturedTrip'
import TripContainer from '../TripContainer/TripContainer'
import Details from '../Details/Details'
import About from '../About/About'
import NavBar from '../NavBar/NavBar'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      trips: [],
      filteredTrips: [],
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

  filterTrips = (driveTime) => {
    this.fetchAllTrips()
    const filteredTrips = this.state.trips.reduce((acc, trip) => {
      const driveRange = driveTime.split('-')
      if (trip.hours_from_denver >= parseInt(driveRange[0]) && trip.hours_from_denver <= driveRange[1]) {
        acc.push(trip)
      }
      return acc
    }, [])
    this.setState({trips: [], filteredTrips: filteredTrips})
    
  }

  clearState = () => {
    this.fetchAllTrips()
    this.setState({filteredTrips: []})
  }

  render() {
    return(
      <div>
        <Route exact path="/" render={() => {
          return (
          <div>
            <NavBar clearState={this.clearState}/>
            {(this.state.error && <h2 className="error">{this.state.errorMessage}</h2>)}
            <Landing /> 
            <FeaturedTrip trips={this.state.trips}/> 
            <NavBar clearState={this.clearState}/>
          </div>) }} />
        <Route exact path="/all-trips" render={() => {
          return (
            <div>
              <NavBar clearState={this.clearState}/>
              <TripContainer trips={this.state.trips} filteredTrips={this.state.filteredTrips} filterTrips={this.filterTrips} clearState={this.clearState}/> 
            </div>
          )}} />
        <Route exact path="/:id" to="main-body" render=     {({match}) => {
            const clickedTrip = this.state.trips.find(trip => trip.id === match.params.id)
            return <Details trip={clickedTrip}/>
          }} />
        <Route exact path="/about" render={() => {
        return (
          <div>
            <NavBar clearState={this.clearState}/> 
            <About /> 
          </div>
          )
        }} />
      </div>
    )
  }
}

export default App
