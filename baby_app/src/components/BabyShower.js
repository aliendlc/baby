import React from 'react';
import Shower1 from '../shower1.png'

const BabyShower = () => {
    return (
        <div className="container">
            <div className="links">
                <a href="https://www.babylist.com/baby-stephanie-burns"
                className="btn deep-purple accent-1"
                target="_blank">RSVP</a>
                <a
                href="http://littleone.rsvpify.com"
                className="btn deep-purple accent-1"
                target="_blank">Registry</a>
            </div>
            <img id='shower1' src={Shower1} alt='Shower Pic 1'/>
        </div>
    )
}

export default BabyShower;
