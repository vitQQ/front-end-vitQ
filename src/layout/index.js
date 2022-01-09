import React from "react";
import Footer from  "./Footer"
import Navbar from "./Navbar"

export default function Layout({children}) {
    return (
        <div className="d-flex flex-column" style={{height: "100vh"}}>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}