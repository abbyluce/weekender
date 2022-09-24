import React from 'react'
import './About.css'
import Logo from '../Logo/Logo'

const About = ({clearState}) => {
   
        return (
            <div className="about-body">
                <Logo clearState={clearState}/>
                <img className="about-photo" src="https://s.abcnews.com/images/US/denver-2-gty-er-211130_1638310959270_hpMain_1x1_992.jpg" alt="denver"/>
                <p className="about-text">
                    <h2 className="welcome">Welcome to Weekender!</h2>
                    I take it you love to explore like I do. I also know that everyday life can get in the way of actually making a plan.
                    <br></br>
                    Here are some easy, long weekend trips that you can take to cities near Denver, with where to stay, eat, and explore.
                    <br></br>
                    So no excuses! Get out there and enjoy your weekends!
                </p>
            </div>
        )
    
}

export default About