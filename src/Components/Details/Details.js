import React from "react"
import './Details.css'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-scroll'
import arrow from '../../images/arrow.png'

const Details = ({trip}) => {
    return trip ? (
        <div id="main-body">
            <NavBar />
            <div className="city-titleblock" style={{
                    backgroundImage: `url(${trip.city_image})`, 
                    backgroundPosition: "top", 
                    backgroundSize: "cover"}}>
            <h2 className="city-name">{trip.city_name} </h2>
                <p className="hours-from-denver">
                    HOURS FROM DENVER: {trip.hours_from_denver}
                </p>
            <p className="city-desc">{trip.city_desc}</p>
            </div>
            <div className="details-body">
                <div className="activities-container">
                        <div>
                            <img src={trip.day_activity_1_image} alt={`${trip.city_name} activity 1`} className="activity-image"/>
                            <p>
                                DAY 1 ACTIVITY:
                                <br></br>
                                {trip.day_activity_1}
                                <br></br>
                                <br></br>
                                EAT HERE:
                                <br></br>
                                {trip.restaurant_1}
                            </p>
                        </div>
                        <div>
                            <img src={trip.day_activity_2_image} alt={`${trip.city_name} activity 2`} className="activity-image"/>
                            <p>
                                DAY 2 ACTIVITY:
                                <br></br>
                                {trip.day_activity_2}
                                <br></br>
                                <br></br>
                                EAT HERE:
                                <br></br>
                                {trip.restaurant_2}
                            </p>
                        </div>
                    </div>
                        <div className="stay-container">
                            <a href={`${trip.stay_link}`} target="_blank">
                                <img src={trip.stay_image} alt={`${trip.city_name} stay`} className="stay-image"/>
                            </a>
                            <br></br>
                            WHERE TO STAY:
                            <br></br>
                            {trip.stay}
                        </div>
            </div>
            <div className="footer-bar">
                <Link to="main-body" spy={true} smooth={true}>
                    <img src={arrow} alt='arrow' className='bottom-arrow' />
                </Link>
            </div>

            
        </div>
    ) : <p>Loading...</p>

}

export default Details