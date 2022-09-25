import React from 'react'
import Logo from '../Logo/Logo'
import Card from '../Card/Card'

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