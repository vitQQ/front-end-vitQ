import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import Kalkulasi from "../pages/Kalkulasi/Kalkulasi";
import Akunku from "../pages/Profil/Akunku";
import NotFound from "../pages/NotFound";
import LandingPage from "../pages/LandingPage/LandingPage"


export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="home" element={<Home />} />
      <Route exact path="kalkulasi" element={<Kalkulasi />} />
      <Route exact path="akunku" element={<Akunku />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
}