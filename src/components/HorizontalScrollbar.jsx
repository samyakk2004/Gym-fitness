import React from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

export default function HorizontalScrollbar({ bodyPartsData, part, setPart, setSearch }) {
    return (
        <ScrollMenu>
            {bodyPartsData.map((item) => {
                return <BodyPart key={item} item={item} part={part} setPart={setPart} setSearch={setSearch} />;
            })}
        </ScrollMenu>
    );
}
