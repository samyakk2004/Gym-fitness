import React from "react";
import { Link } from "react-router-dom";

export default function ExerciseCard({ id, image, name, part, type }) {
    return (
<<<<<<< HEAD
        <Link to={`/${id}`}>
            <div className="exercise-card">
=======
        <Link to={`/:${id}`}>
            <div className="exercise">
>>>>>>> c100f49 (Initial commit)
                <img src={image} />
                <p>{name}</p>
                <div>
                    <span>{part}</span>
                    <span>{type}</span>
                </div>
            </div>
        </Link>
    );
}
