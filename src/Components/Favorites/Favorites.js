import React from 'react'
import Logo from '../Logo/Logo'
import Card from '../Card/Card'
import PropTypes from 'prop-types'

const Favorites = ({trips, clearState}) => {
    let faves
    if (trips.length) {
        faves = trips.map(trip => {
        const {id, city_image, city_name, hours_from_denver} = trip
        return <Card 
        key={id}
        id={id}
        cityImage={city_image}
        cityName={city_name}
        hoursFromDenver={hours_from_denver} 
        />  
        })
    } 

    return (
        <div>
            <Logo clearState={clearState}/>
            <div className="trip-container-header">
                <h2 className="trip-container-title">SAVED FAVORITES</h2>
            </div>
            <div className="trip-container">
            {faves}
            </div>
        </div>
    )
}

export default Favorites

const tripsShape = {
    id: PropTypes.string,
    city_name: PropTypes.string,
    city_image: PropTypes.string,
    city_desc: PropTypes.string,
    stay: PropTypes.string,
    stay_link: PropTypes.string,
    stay_image: PropTypes.string,
    day_activity_1: PropTypes.string,
    day_activity_1_image: PropTypes.string,
    day_activity_2: PropTypes.string,
    day_activity_2_image: PropTypes.string,
    restaurant_1: PropTypes.string,
    restaurant_2: PropTypes.string,
    hours_from_denver: PropTypes.number,
    directions: PropTypes.string
}

Favorites.propTypes = {
    trips: PropTypes.arrayOf(PropTypes.shape(tripsShape)).isRequired,
    clearState: PropTypes.elementType
  }