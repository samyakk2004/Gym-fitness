import React from "react";
import Navbar from "./Navbar";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <h1>About Me</h1>
                <p>
                    I'm a web developer from India. Currently I'm an undergrad student pursuing Bachelor's in computer
                    science. I have a solid 3 years of experience in Web developement which includes basics from HTML,
                    CSS, JS all the way to React, Redux, React-Router. I'm currently looking for jobs and internships to
                    start off my engineering career. Hope you find this project up to the mark. Feel free to contact me
                    for any oppurtunities. I would be more than obliged if you do so. Thank you have a nice day.
                </p>
                <h1>About the API</h1>
                <p>
                    This project was built from scratch using React, SASS, React-Router, Axios and Firebase. React was
                    the frontend frame work that I chose for this app because its very easy and understand and helps me
                    to create optimzed web apps. This web app uses the "ExerciseDB" database from rapidAPI which is an
                    awesome api since it has a vide variery of options and endpoints to choose to and play with. It
                    provides around 1300 different exercises categorised as target, body part and equipment wise.
                    Various endpoint requests can be made for various functionalities and values.
                </p>
                <h1>About the implementation</h1>
                <p>
                    The project itself was divided into multiple parts the navbar, the logo and banner, the search
                    options and the search bar, lastly the exercise list where all seperate modular components. The
                    exercise cards are reusable components used all along the webapp. React router is used for routing
                    which takes us to the different pages via different routes. The navbar has two specific links the
                    home page and the about which where you are current at. The exercises take us to a new page which
                    gives us a detailed overview of the exercise, its categories and similar exercises.
                </p>
            </div>
        </>
    );
}
