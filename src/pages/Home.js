import React from 'react';
import Available from './Available';
import HomeBanner from './HomeBanner';
import Time from './Time';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Time />
            <Available />
        </div>
    );
};

export default Home;