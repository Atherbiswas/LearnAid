import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';
import './Courses.css'
const Courses = ({course}) => {
    const {id,name, logo} = course;
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top bg-success" src={logo} />
      <Card.Body>
        <Card.Title>Course: {name}</Card.Title>
       <Button><Link to={`/courses/${id}`} className='id-link'>Let's Start Quiz</Link></Button>
      </Card.Body>
    </Card>

    );
};

export default Courses;