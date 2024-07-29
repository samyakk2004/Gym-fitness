import React, { useEffect } from "react";
import { useState } from "react";
import { fetchSearchedData } from "../utils/fetchSearchedData";
import HorizontalScrollbar from "./HorizontalScrollbar";

export default function Search({ setExercises, part, setPart }) {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
            const bodyPartsArray = await fetchSearchedData(url);
            setBodyParts(["all", ...bodyPartsArray]);
        }

        fetchCategories();
    }, []);

    useEffect(() => {
        async function randomFetch() {
            const exerciseData = await fetchSearchedData("https://exercisedb.p.rapidapi.com/exercises", 1000);
            const searchedExercises = exerciseData.filter((exercise) => {
                return (
                    exercise.bodyPart.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search)
                );
            });
            console.log(exerciseData);
            setExercises(searchedExercises);
        }

        randomFetch();
    }, [part]);

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    async function submitSearchInput(e) {
        e.preventDefault();
        console.log("hello");
        const exerciseData = await fetchSearchedData("https://exercisedb.p.rapidapi.com/exercises", 1000);
        const searchedExercises = exerciseData.filter((exercise) => {
            return (
                exercise.bodyPart.toLowerCase().includes(search) ||
                exercise.target.toLowerCase().includes(search) ||
                exercise.name.toLowerCase().includes(search) ||
                exercise.equipment.toLowerCase().includes(search)
            );
        });
        setPart("");
        setExercises(searchedExercises);
    }

    return (
        <div className="search-container">
            <h2>Awesome exercises you should know</h2>
            <form onSubmit={submitSearchInput}>
                <input type="text" placeholder="Search..." onChange={handleSearch} value={search} />
                <button>Go</button>
            </form>
            <HorizontalScrollbar bodyPartsData={bodyParts} part={part} setPart={setPart} setSearch={setSearch} />
        </div>
    );
}
