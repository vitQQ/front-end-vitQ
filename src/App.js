import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import AppRoutes from "./router";

function App() {
  return (
    <div className="container fs-h3 text-primary-3">
      <Navbar/>
        <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
