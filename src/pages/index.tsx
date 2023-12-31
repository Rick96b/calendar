import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./home").then((module) => ({ default: module.HomePage })));

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};