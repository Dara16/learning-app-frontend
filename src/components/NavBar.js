import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/tutors">Tutors</Link>
            <Link to="/students">Students</Link>
        </div>
    )
}