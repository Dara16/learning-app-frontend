import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints';



export default function StudentDetails() {
    const [student, setStudent] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'students/' + id)
        .then((res) => res.json())
        .then((json) => setStudent(json));
    }, [id]);

    

    return (
        <div>
            {student && (
                <>
                    <h2>{student.name}</h2>
                    
                    <p>Grade: {student.grade}</p>
                    <h3>Courses</h3>
                    

                    
                
                
                </>
            )}
        </div>
    )
}