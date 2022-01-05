import { Routes, Route, Navigate  } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage"

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}
