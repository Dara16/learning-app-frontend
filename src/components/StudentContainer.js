import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import Student from './Student.js'


export default function StudentContainer() {

    const [students, setStudents] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'students')
            .then(res => res.json())
            .then(json => setStudents(json))
    }, [])

    useEffect(() =>{
        console.log("students: ")
        console.log(students)
    }, [students])

    function populateStudents() {
        return students.map(student => <Student student={student} deleteStudent={deleteStudent} updateStudent={updateStudent}  key={student.id}/>)
    }

    function deleteStudent(student) {
        fetch(BASE_URL + 'students/' + student.id, {
            method: "DELETE"
        })
        const newStudents = students.filter(stdn => stdn.id !== student.id)
        setStudents(newStudents)
    }

    function updateStudent(student) {
        fetch(BASE_URL + 'students/' + student.id, {
            method: "UPDATE",
            body: JSON.stringify(student)
        })

        const newStudents = students.map(stdn => {
            if (stdn.id === student.id) {
                stdn = student
            }
        })
        setStudents([...newStudents])
    }

    return (
        <div>
            {students && populateStudents()}
        </div>
    )
}