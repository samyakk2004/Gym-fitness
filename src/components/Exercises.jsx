import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import ReactPaginate from "react-paginate";

export default function Exercises({ part, setExercises, exercises }) {
    const [pageNumber, setPageNumber] = useState(0);

    const itemsPerPage = 16;
    const itemsVisited = pageNumber * itemsPerPage;
    const pageCount = Math.ceil(exercises.length / itemsPerPage);

    const displayItems = exercises.slice(itemsVisited, itemsVisited + itemsPerPage).map((item) => {
        return (
            <ExerciseCard
                key={item.id}
                id={item.id}
                image={item.gifUrl}
                name={item.name}
                part={item.bodyPart}
                type={item.equipment}
            />
        );
    });

    function pageChangeHandler({ selected }) {
        setPageNumber(selected);
    }

    return (
        <div className="exercises-container" id="exercises">
            <h3>Showing results</h3>
            <div className="exercise-card-container">
                {displayItems}
                <ReactPaginate
                    previousLabel="⤶"
                    nextLabel="⤷"
                    pageCount={pageCount}
                    onPageChange={pageChangeHandler}
                    nextClassName="paginate-next"
                    previousClassName="paginate-prev"
                    containerClassName="paginate-container"
                    pageClassName="paginate-page"
                />
            </div>
        </div>
    );
}
