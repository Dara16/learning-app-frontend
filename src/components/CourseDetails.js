import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints';


export default function CourseDetails() {
    const [course, setcourse] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'courses/' + id)
        .then((res) => res.json())
        .then((json) => setcourse(json));
    }, [id]);

    return (
        <div>
            {course && (
                <>
                    <h2>{course.title}</h2>
                    <h3>Content</h3>
                    <p>{course.content}</p>
                    <h3>Tutor</h3>
                    <p>{course.tutor}</p>
                
                </>
            )}
        </div>
    )
}