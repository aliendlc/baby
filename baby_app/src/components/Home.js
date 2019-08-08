import React from 'react';
import Countdown from './Countdown'

const Home = () => {
    return (
        <div className='home'>
            <div>
                <Countdown timeTillDate="9 04 2019, 23:59 pm" timeFormat="MM DD YYYY, h:mm a" />
            </div>
        </div>
    )
}

export default Home;
