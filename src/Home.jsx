import HeaderContent from "./components/HeaderContent";
import Search from "./components/Search";
import Exercises from "./components/Exercises";
import { useState } from "react";

export default function Home() {
    const [exercises, setExercises] = useState([]);
    const [part, setPart] = useState("all");
    console.log(exercises);
    return (
        <div>
            <HeaderContent />
            <Search part={part} setPart={setPart} setExercises={setExercises} />
            <Exercises part={part} exercises={exercises} setExercises={setExercises} />
        </div>
    );
}
