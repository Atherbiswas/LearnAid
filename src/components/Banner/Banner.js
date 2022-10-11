import React from 'react';
import logo from '../../banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-img'>
                <img src={logo} className='imgres' alt="" />
            </div>
            <div className='overlay'>
                <div className='content'>
                    <h1>Learn and Engage</h1>
                    <h4>You can test your technology skill with LearnAid quizz's. <br /> The test contains more than 10 quiz about differnet topic.</h4> 

                </div>

            </div>

        </div>
    );
};

export default Banner;