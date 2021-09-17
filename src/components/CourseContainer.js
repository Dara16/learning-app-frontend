import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import Course from './Course.js'

export default function CourseContainer() {

    const [courses, setCourses] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'courses')
            .then(res => res.json())
            .then(json => setCourses(json))
    }, [])

    function populateCourses() {
        return courses.map(course => <Course course={course} deleteCourse={deleteCourse} updateCourse={updateCourse}  key={course.id}/>)
    }

    function deleteCourse(course) {
        fetch(BASE_URL + 'courses/' + course.id, {
            method: "DELETE"
        })
        const newCourses = courses.filter(cse => cse.id !== course.id)
        setCourses(newCourses)
    }

    function updateCourse(course) {
        fetch(BASE_URL + 'courses/' + course.id), {
            method: "UPDATE",
            body: JSON.stringify(course)
        }

        const newCourses = courses.map(cse => {
            if (cse.id === course.id) {
                cse = course
            }
        })
        setCourses([...newCourses])
    }

    return (
        <div>
            {courses && populateCourses()}
        </div>
    )
}