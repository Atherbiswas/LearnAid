import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const courseDetail = useLoaderData();
    console.log(courseDetail);
    return (
        <div>
            <h1>This is course details</h1>
        </div>
    );
};

export default CourseDetail;