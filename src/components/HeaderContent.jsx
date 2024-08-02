import React from "react";
import banner from "../assets/images/banner.png";

export default function HeaderContent() {
    return (
        <div className="header-container">
            <div>
                <h1>BULK club</h1>
                <p>
                    Sweat, Grind <br /> and Repeat
                </p>
                <span>Best curated exercises from all over the internet</span>
                <button href="#exercises" class="check-exercise">Check exercises</button>
            </div>
            <img src={banner} />
        </div>
    );
}
