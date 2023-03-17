import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";
import { Registration } from "../pages/Registration";
import { MenusLayout } from "../Layout/MenusLayout";

const routes = [
	{
		path: "/",
		authRequired: false,
		element: <Home />
	},
	{
		path: "/cadastro",
		authRequired: false,
		element: (
			<MenusLayout>
				<Registration />
			</MenusLayout>
		)
	}
];

export const ProjectRoutes = () => {
	const isAuthenticated = true;

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(({ element, path }) =>
					isAuthenticated &&
                    <Route
                    	key={path}
                    	path={path}
                    	element={element}
                    />
				)}

				<Route element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};