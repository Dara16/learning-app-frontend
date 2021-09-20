import React from 'react';
import { Link } from 'react-router-dom';

export default function Course({ course, deleteCourse }) {

   
    return (
        <div className='course-show'>
            <Link to={`/courses/${course.id}`}>
                <h3>{course.title}</h3>
            </Link>
                
            
                <button onClick={() => deleteCourse(course)}>Delete Course</button>
        

        </div>
    )
}