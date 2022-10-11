import React, { useState } from 'react';
import './Quiz.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({quiz}) => {
    // const [option, setOption] = useState('');
    const [rightAnswer, setRightAnswer] = useState('');
    console.log(rightAnswer)
    const {question, options, correctAnswer} = quiz;
    const handleClick = (option) =>{
        console.log(option)
        if(correctAnswer === option){
            setRightAnswer('Right Answer');
            notify('Right Answer');
        }
        else if(correctAnswer !== option){
            setRightAnswer('false');
            notify('false');
            // console.log('false');
        }
    }
    const notify = (message) => toast(message);
    
    return (
        <div className='container text-center border border-1 rounded-4 mb-2 shadow-lg'>
            <h2>{question}</h2>
            <div>
            {
                options.map(option => <div className='border border-1 mb-1 w-75 container rounded-4 text-start p-2 bg-cadetblue fs-5'
                key = {option}
                > 
                    <input onClick={() => handleClick(option)} type="radio" id="html" name="fav_language" value="HTML"/><label>{option}</label>
                </div>)
            }
            </div>
            {/* <button onClick={notify}>Notify!</button> */}
        <ToastContainer />
        </div>
    );
};

export default Quiz;