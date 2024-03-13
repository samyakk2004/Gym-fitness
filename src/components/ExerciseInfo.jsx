import React from "react";
import quipmentImage from "../assets/icons/equipment.png";
import bodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";

export default function ExerciseInfo({ content }) {
    return (
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
    );
}
