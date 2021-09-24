import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints';
import Course from './Course'



export default function TutorDetails() {
    const [tutor, setTutor] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'tutors/' + id)
        .then((res) => res.json())
        .then((json) => setTutor(json));
    }, [id]);

    

    return (
        <div>
            {tutor && (
                <>
                    <h2>{tutor.name}</h2>
                    
                    <h3>Courses</h3>
                    {tutor.courses.map((course) => (
                        <Course course={course} />
                    ))}
                    

                    
                
                
                </>
            )}
        </div>
    )
}