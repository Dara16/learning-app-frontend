import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import Student from './Student.js'
import StudentForm from './StudentForm'


export default function StudentContainer() {

    const [students, setStudents] = useState([])

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
        return students.map(student => <Student student={student} createStudent={createStudent} deleteStudent={deleteStudent} updateStudent={updateStudent}  key={student.id}/>)
    }

    function createStudent(student) {
 
        fetch(BASE_URL + "/students", {
            method: "POST",
            body: JSON.stringify(student),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => setStudents([...students, json]))
            
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
            <h3>Add New Student</h3>
            <StudentForm createStudent={createStudent}/>
            {students && populateStudents()}
        </div>
    )
}