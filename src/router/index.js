import { Routes, Route, Navigate  } from "react-router-dom";

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={""} />
            <Route exact path="*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}
