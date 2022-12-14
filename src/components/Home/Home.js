import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <section className='container mt-5'>
            <h2 className='text-center'>Total course: {courses.data.length}</h2>
            </section>
            <section className='container mt-5'>
            <div className='row g-5'>
            {
                courses.data.map(course => <Courses
                    key = {course.id}
                    course = {course}
                ></Courses>)
            }
            </div>
            </section>
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Home;