import React from "react";
import banner from "../assets/images/banner.png";

export default function HeaderContent() {
    return (
        <div className="header-container">
            <div>
                <h1>Fitness Club</h1>
                <p>
                    Sweat, Grind <br /> and Repeat
                </p>
                <span>Best curated exercises from all over the internet</span>
                <button href="#exercises">Check exercises</button>
            </div>
            <img src={banner} />
        </div>
    );
}
