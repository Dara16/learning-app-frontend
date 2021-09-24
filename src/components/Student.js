import React from 'react';
import { Link } from 'react-router-dom';

export default function Student({student, deleteStudent}) {
    return (
        <div className='student-show'>
            <Link to={`/students/${student.id}`}>
                <h3>{student.name}</h3>
            </Link>
            <p>GPA:{student.grade}</p>

                <button onClick={() => deleteStudent(student)}>Delete Student</button>
            <br/>

        </div>
    )
}