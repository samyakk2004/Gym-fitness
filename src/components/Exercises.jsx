import React from "react";
import ExerciseCard from "./ExerciseCard";

export default function Exercises({ part, setExercises, exercises }) {
    return (
        <div className="exercises-container">
            <h3>Showing results</h3>
            <div>
                {exercises.map((item) => {
                    return (
                        <ExerciseCard
                            key={item.id}
                            id={item.id}
                            image={item.gifUrl}
                            name={item.name}
                            part={item.bodyPart}
                            type={item.equipment}
                        />
                    );
                })}
            </div>
        </div>
    );
}
