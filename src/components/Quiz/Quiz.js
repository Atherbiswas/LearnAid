import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {question, options} = quiz;
    return (
        <div className='container text-center border border-1 mb-2 shadow-lg'>
            <h2>{question}</h2>
            <div>
            {
                options.map(option => <div className='border border-1 mb-1 w-75 container text-start p-2 bg-cadetblue fs-5'> 
                    <input type="radio" id="html" name="fav_language" value="HTML"/><label for="html">{option}</label>
                </div>)
            }
            </div>
        </div>
    );
};

export default Quiz;