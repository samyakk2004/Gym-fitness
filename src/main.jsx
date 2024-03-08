import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import ExerciseContent from "./components/ExerciseContent";
<<<<<<< HEAD
import HomeContent from "./components/HomeContent";
import About from "./components/About";
=======
>>>>>>> c100f49 (Initial commit)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/:id",
        element: <ExerciseContent />,
    },
<<<<<<< HEAD
    {
        path: "/about",
        element: <About />,
    },
=======
>>>>>>> c100f49 (Initial commit)
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);
