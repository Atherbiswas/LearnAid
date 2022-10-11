import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <div>
            <section className='container mt-5 border border-3 shadow rounded-4'>
                <h2>Q1: What is the purpose of React Router?</h2>
                <h6><p>*ReactJS Router is mainly used for developing Single Page Web Applications</p><p>*React Router is used to define multiple routes in the application.</p><p>*It provides the synchronous URL on the browser with data that will be displayed on the web page.</p></h6>
            </section>
            <br />
            <section className='container mt-2 border border-3 shadow rounded-4'>
            <h2>Q2: How does contex api works?</h2>
            <h6>*The React Context API is a way for a React app to effectively produce global variables that can be passed around.This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</h6>
            </section>
            <br />
            <section className='container mt-2 border border-3 shadow rounded-4'>
            <h2>Q3: What is the useRef hooks and how does work?</h2>
            <h6>*The useRef Hook lets us create mutable variables inside functional components. There are three main key points that you should keep in mind when using the useRef Hook: A ref created with useRef will be created only when the component has been mounted and preserved for the full lifecycle.we can declare it by const refContainer = useRef(initialValue);useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</h6>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Blog;