import React from 'react';
import Countdown from './Countdown'

const Home = () => {
    return (
        <div className='home'>
            <div>
                <Countdown timeTillDate="9 04 2019, 23:59 pm" timeFormat="MM DD YYYY, h:mm a" />
            </div>
            <iframe src="https://giphy.com/embed/B1KxmQPjVykjiYiJze" width="480" height="302" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/evite-baby-stork-B1KxmQPjVykjiYiJze">via GIPHY</a></p>
        </div>
    )
}

export default Home;
