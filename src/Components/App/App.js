import './App.css'
import React, { Component } from 'react'
import Landing from '../Landing/Landing'
import FeaturedTrip from '../FeaturedTrip/FeaturedTrip'
import TripContainer from '../TripContainer/TripContainer'
import Details from '../Details/Details'
import About from '../About/About'
import NavBar from '../NavBar/NavBar'
import Favorites from '../Favorites/Favorites'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      trips: [],
      filteredTrips: [],
      favoritedTrips: [],
      error: false,
      errorMessage: null
    }
  }

  fetchAllTrips = () => {
    fetch('https://weekender-be.vercel.app/trips')
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

  favoriteATrip = (id) => {
    const newFave = this.state.trips.find(trip => trip.id === id)
    this.state.favoritedTrips.push(newFave)
    }

  clearState = () => {
    this.fetchAllTrips()
    this.setState({filteredTrips: []})
  }

  render() {
    return(
      <div>
        <NavBar clearState={this.clearState}/>
        <Route exact path="/" render={() => {
          return (
          <div>
            {(this.state.error && <h2 className="error">{this.state.errorMessage}</h2>)}
            <Landing /> 
            <FeaturedTrip trips={this.state.trips}/> 
            <NavBar clearState={this.clearState}/>
          </div>) }} />
        <Route exact path="/all-trips" render={() => <TripContainer trips={this.state.trips} filteredTrips={this.state.filteredTrips} filterTrips={this.filterTrips} clearState=  {this.clearState}/> } />
        <Route exact path="/:id" to="main-body" render={({match}) => {
            const clickedTrip = this.state.trips.find(trip => trip.id === match.params.id)
            return <Details favoriteATrip={this.favoriteATrip} trip={clickedTrip}/>
          }} />
        <Route exact path="/about" render={() => <About /> } />
        <Route exact path="/favorites" render={() => <Favorites clearState={this.clearState} trips={this.state.favoritedTrips} /> } />
      </div>
    )
  }
}

export default App
