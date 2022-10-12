import React from 'react';
import './Quiz.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons'


const Quiz = ({quiz}) => {
    const {question, options, correctAnswer} = quiz;
    const handleClick = (option) =>{
        if(correctAnswer === option){
            notify('YAY! Right Answer');
        }
        else if(correctAnswer !== option){
            notify('Oops! Wrong Answer');
        }
    }
    const notify = (message) => toast(message);
    const handleIcon =() => {
        notify(correctAnswer);
    }
    
    return (
        <div className='container text-center border border-1 rounded-4 mb-2 shadow-lg'>
            <h2>Q:{question}</h2>
            <div>
                <p className='text-end'><FontAwesomeIcon onClick={handleIcon} icon={faEye}></FontAwesomeIcon></p>
            {
                options.map(option => <div className='bg-cadetblue border border-1 mb-1 w-75 container rounded-4 text-start p-2 fs-5'
                key = {option}
                > 
                    <input onClick={() => handleClick(option)} type="radio" id="option" value="option"/><label>{option}</label>
                </div>)
            }
            </div>
        <ToastContainer />
        </div>
    );
};

export default Quiz;