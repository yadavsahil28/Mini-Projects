import { createBrowserRouter } from "react-router-dom";
import { routes } from "./config";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {index: true, element: <HomePage />},
            ...routes.map((route) => ({
                path: route.id,
                element: route.element,
            })),
        ],
    },
]);