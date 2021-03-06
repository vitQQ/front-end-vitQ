import { Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import LandingPage from "../pages/LandingPage/LandingPage"
import Login from "../pages/login";
import Daftar from "../pages/register";
import HasilKalkulasi from "../pages/Kalkulasi/HasilKalkulasi";
import MenuKalkululasi from "../pages/MenuKalkulasi/MenuKalkulasi";
import Profile from "../pages/Profil/Profile"
import Akunku from "../pages/Profil/Akunku";


export default function AppRoutes() {
  return (
    <Routes className="container fs-h3 text-primary-3">
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="home" element={<Home />} />
      {/* <Route exact path="kalkulasi" element={<Kalkulasi />} /> */}
      <Route exact path="/kalkulasi" element={<MenuKalkululasi />} />
      <Route exact path="kalkulasi/hasilkalkulasi" element={<HasilKalkulasi />} />
      <Route exact path="akunku" element={<Akunku />} />
      <Route exact path="akunku/editprofil" element={<Profile />} />
      <Route exact path="/masuk" element={<Login />} />
      <Route exact path="/daftar" element={<Daftar />} />
      <Route exact path="/kalkulasi" element={<MenuKalkululasi />} />
      <Route exact path="/not-found" element={<NotFound />} />
      <Route exact path="*" element={<Navigate replace to="/not-found" />} />
    </Routes>
  );
}