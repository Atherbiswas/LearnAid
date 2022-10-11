import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './CourseDetail.css'

const CourseDetail = () => {
    const courseDetail= useLoaderData();
    console.log(courseDetail.data.questions)
    return (
        <div>
            <h1 className='mt-5 mb-5 text-center text-primary'>This is course Total quiz:{courseDetail.data.questions.length}</h1>
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