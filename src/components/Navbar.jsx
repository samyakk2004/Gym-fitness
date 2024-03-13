import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <h1>Curls</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <li>Contact</li>
                <a href="#exercises">Get started</a>
            </ul>
        </div>
    );
}
