import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchSearchedData } from "../utils/fetchSearchedData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ExerciseInfo from "./ExerciseInfo";
import ExerciseRecomendation from "./ExerciseRecomendation";

export default function ExerciseContent() {
    const [content, setContent] = useState(null); // Initialize content state as null
    const { id } = useParams();

    useEffect(() => {
        async function fetchContent() {
            const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
            const response = await fetchSearchedData(url, null);
            setContent(response);
        }
        fetchContent();
    }, [id]); // Include id in dependency array to refetch content when id changes

    return (
        <>
            <Navbar />
            <div className="exercise-content-container">
                {content ? <ExerciseInfo content={content} /> : <p>Loading...</p>}
            </div>
            {content && <ExerciseRecomendation target={content.target} />}
            <Footer />
        </>
    );
}
