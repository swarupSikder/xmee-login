import React from 'react';
import { createBrowserRouter } from "react-router";
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <SignInPage />
    },
    {
        path: "/auth/sign-up",
        element: <SignUpPage />
    },
]);