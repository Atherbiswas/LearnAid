import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';
import './Courses.css'
const Courses = ({course}) => {
    const {id,name, logo, total} = course;
    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate(`/courses/${id}`)
    }
    return (
        <div className='col-sm-12 col-md-3'>
          <Card>
      <Card.Img variant="top bg-success" src={logo} />
      <Card.Body>
        <Card.Title>Course: {name}</Card.Title>
        <Card.Text>Total quiz: {total}</Card.Text>
       <Button onClick={handleNavigate} variant='primary'>Let's Start Quiz</Button>
      </Card.Body>
    </Card>
        </div>

    );
};

export default Courses;