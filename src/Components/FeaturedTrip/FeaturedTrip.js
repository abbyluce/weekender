import React from "react"
import './FeaturedTrip.css'

const FeaturedTrip = () => {
    return (
        <div className="featured">
            <div className="title-area" >
                <div className="featured-title-area" style={{
                    backgroundImage: `url('https://ewscripps.brightspotcdn.com/dims4/default/2cf3d76/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F12%2F93%2F23f66da34c32a8ccc46873593ea4%2F201707-ctb-dave-kozlowski-sunset.jpg')`, 
                    backgroundPosition: "center", 
                    backgroundSize: "cover"}}>
                    <h2>FEATURED TRIP:</h2>
                    <h3>Crested Butte</h3>
                </div>
                <div className="featured-body-photos">
                    <img className="featured-photo" src="https://a0.muscache.com/im/pictures/miso/Hosting-50445514/original/86c695b5-2972-412d-b70a-e20688b6c052.jpeg?im_w=1200" alt="airbnb-photo"/>
                    <img className="featured-photo" src="https://i0.wp.com/aliciamarietravels.com/wp-content/uploads/2020/08/DSC_0073.jpg?resize=640%2C408&ssl=1" alt="hike-photo"/>
                    <img className="featured-photo" src="https://i.ytimg.com/vi/zSZTk3BJ-nA/maxresdefault.jpg" alt="hike-photo"/>
                </div>
                <p className="featured-body-text">
                    DRIVE TIME FROM DENVER: 4 HOURS
                </p>
                <button className="view-details-button">
                    VIEW DETAILS
                </button>
            </div>
        </div>
    )
}

export default FeaturedTrip