import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './CourseDetail.css'

const CourseDetail = () => {
    const courseDetail= useLoaderData();
    return (
        <div>
            <h1 className='mt-5 mb-2 text-center header'>Quiz of <span className='text-success'>{courseDetail.data.name}</span></h1>
            <h2 className='mb-5 text-center text-primary'>This is course Total quiz:{courseDetail.data.questions.length}</h2>
            {
               courseDetail.data.questions.map(quiz => <Quiz 
               key= {quiz.id}
               quiz={quiz}
               ></Quiz>) 
            }
        </div>
    );
};

export default CourseDetail;