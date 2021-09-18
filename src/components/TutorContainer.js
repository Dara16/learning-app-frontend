import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import Tutor from './Tutor.js'


export default function TutorContainer() {

    const [tutors, setTutors] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'tutors')
            .then(res => res.json())
            .then(json => setTutors(json))
    }, [])


    function populateTutors() {
        return tutors.map(tutor => <Tutor tutor={tutor} updateTutor={updateTutor}  key={tutor.id}/>)
    }


    function updateTutor(tutor) {
        fetch(BASE_URL + 'tutors/' + tutor.id, {
            method: "UPDATE",
            body: JSON.stringify(tutor)
        })

        const newTutors = tutors.map(t => {
            if (t.id === tutor.id) {
                t = tutor
            }
        })
        setTutors([...newTutors])
    }

    return (
        <div>
            {tutors && populateTutors()}
        </div>
    )
}