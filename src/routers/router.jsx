import React from 'react';
import { createBrowserRouter } from "react-router";
import Login from '../pages/Login';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>,
    },
]);