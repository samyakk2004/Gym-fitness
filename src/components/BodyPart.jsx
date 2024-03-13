import React from "react";
import gym from "../assets/icons/gym.png";

export default function BodyPart({ item, part, setPart, itemId, setSearch }) {
    function bodyPartClickHandler() {
        setPart(item);
        setSearch(item);
    }

    return (
        <div onClick={bodyPartClickHandler} className={`body-parts-container ${item === part ? "selected-part" : ""}`}>
            <img src={gym} />
            <p>{item}</p>
        </div>
    );
}
