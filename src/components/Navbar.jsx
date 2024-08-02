import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <h1>BULK</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <li>Contact</li>
                <a href="#exercises" class="get-started">Get started</a>
            </ul>
        </div>
    );
}
