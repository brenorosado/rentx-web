import React from "react";
import { BrowserRouter, Routes, createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";

const routes = [
    {
        path: "/",
        authRequired: false,
        element: <Home />
    }
]

export const ProjectRoutes = () => {
    const isAuthenticated = true;

    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ element, path, authRequired }) =>
                    isAuthenticated &&
                    <Route
                        path={path}
                        element={element}
                    />
                )}

                <Route element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}