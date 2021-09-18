import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints';

export default function CourseDetails() {
    const[course, setcourse] = useState(null);

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
                    <p>{course.title}</p>
                    <p>Tutor: {course.tutor.name}</p>
                    <p>Course Content</p>
                    <p>{course.content}</p>
                </>
            )}
        </div>
    )
}