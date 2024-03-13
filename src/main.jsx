import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import ExerciseContent from "./components/ExerciseContent";
import HomeContent from "./components/HomeContent";
import About from "./components/About";

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
    {
        path: "/about",
        element: <About />,
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);
