import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import './Home.css'

const Home = () => {
    const courses = useLoaderData();
    console.log(courses.data)
    return (
        <div>
            <Banner></Banner>
            <section className='container mt-5'>
            <h2 className='text-center'>Total course: {courses.data.length}</h2>
            </section>
            <section className='container mt-5'>
            <div className='grid-course'>
            {
                courses.data.map(course => <Courses
                    key = {course.id}
                    course = {course}
                ></Courses>)
            }
            </div>
            </section>
        </div>
    );
};

export default Home;