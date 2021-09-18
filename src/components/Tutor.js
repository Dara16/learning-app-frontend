import React from 'react';
import { Link } from 'react-router-dom';

export default function Tutor({tutor}) {
    return (
        <div className='Tutor-show'>
            <Link to={`/tutors/${tutor.id}`}>
                <h3>{tutor.name}</h3>
            </Link>
        

            <br/>

        </div>
    )
}