import React from "react";
import BodyPart from "./BodyPart";

export default function HorizontalScrollbar({ bodyPartsData, part, setPart, setSearch }) {
    return (
        <div className="body-parts-container">
            {bodyPartsData.map((item) => {
                return <BodyPart key={item} item={item} part={part} setPart={setPart} setSearch={setSearch} />;
            })}
        </div>
    );
}
