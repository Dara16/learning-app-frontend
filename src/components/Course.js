import React from 'react'

export default function Course({course, deleteCourse}) {
    return (
        <div>
            <br/>
                <p>{course.title}</p>
                <p>{course.content}</p>

                <button onClick={() => deleteCourse(course)}>Delete Course</button>
            <br/>

        </div>
    )
}