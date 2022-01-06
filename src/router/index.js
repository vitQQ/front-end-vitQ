import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage"
import Home from "../pages/Home";
import Kalkulasi from "../pages/Kalkulasi";
import Akunku from "../pages/Akunku";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="home" element={<Home />} />
      <Route exact path="kalkulasi" element={<Kalkulasi />} />
      <Route exact path="akunku" element={<Akunku />} />
      <Route exact path="not-found" element={<NotFound />} />
    </Routes>
  );
}