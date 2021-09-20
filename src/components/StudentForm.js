import React, {useState} from 'react'
import Student from './Student'

export default function StudentForm({createStudent}) {
    const [student, setStudent] = useState({name: "", grade: ""})

    function handleChange(e) {
        const updatedValue = {...student}
        updatedValue[e.target.name] = e.target.value
        setStudent(updatedValue)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createStudent(student)
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" value={student.name} onChange={handleChange} />
                <input name="grade" value={student.grade} onChange={handleChange} />
                <button type="submit">Create Student</button>
            </form>

        </div>
  
    )
}