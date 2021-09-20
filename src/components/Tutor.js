import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Tutor({tutor, updateTutor}) {
    const [newTutor, setNewTutor] = useState({...tutor})

    function handleChange(e) {
        const updatedValue = {...newTutor};
        updatedValue[e.target.name] = e.target.value
        setNewTutor(updatedValue)
    }

    function handleUpdate(e) {
        e.preventDefault();
        updateTutor(newTutor);
    }

    return (
        <div className='Tutor-show'>
            <Link to={`/tutors/${tutor.id}`}>
                <h3>{tutor.name}</h3>
            </Link>

            <form onSubmit={handleUpdate}>
                <input name="name" value={newTutor.name} onChange={handleChange} />
                <button type="submit">Update Tutor</button>
            </form>

        </div>
    )
}