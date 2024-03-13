import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchSearchedData } from "../utils/fetchSearchedData";
import Navbar from "./Navbar";
import quipmentImage from "../assets/icons/equipment.png";
import bodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import Footer from "./Footer";

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
                {content ? (
                    <>
                        <img src={content.gifUrl} alt={content.name} />
                        <div>
                            <h1>{content.name}</h1>
                            {content.instructions.length > 0 && (
                                <ul>
                                    {content.instructions.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            <div>
                                <div className="content-info">
                                    <img src={bodyPartImage} />
                                    <p>{content.bodyPart}</p>
                                </div>
                                <div className="content-info">
                                    <img src={targetImage} />
                                    <p>{content.target}</p>
                                </div>
                                <div className="content-info">
                                    <img src={quipmentImage} />
                                    <p>{content.equipment}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Footer />
        </>
    );
}
