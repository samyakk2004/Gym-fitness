import React, { useEffect, useState } from "react";
import { fetchSearchedData } from "../utils/fetchSearchedData";
import ExerciseCard from "./ExerciseCard";
export default function ExerciseRecomendation({ target }) {
    const [targetExercises, setTargetExercises] = useState([]);

    useEffect(() => {
        async function fetchTarget() {
            const url = `https://exercisedb.p.rapidapi.com/exercises/target/${target}`;
            const response = await fetchSearchedData(url, 8);
            setTargetExercises(response);
            console.log(response);
        }

        fetchTarget();
    }, []);
    return (
        <div className="recommended-container">
            <h1>Similar exercises</h1>
            <div className="recommended-exercises-container">
                {targetExercises.map((item) => {
                    return (
                        <ExerciseCard
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
