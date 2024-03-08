import { Outlet } from "react-router";
import "./scss/App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
