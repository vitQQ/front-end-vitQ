import React from "react";
import Footer from  "./Footer"
import Navbar from "./Navbar"
import useWindowDimensions from '../helpers/WindowDimension';
import {useLocation} from 'react-router-dom'

export default function Layout({children}) {
    let {pathname} = useLocation()
    let { width } = useWindowDimensions()
    return (
        <div className="d-flex flex-column" style={{height: "100vh"}}>
            <Navbar/>
                {children}
            {width>768?<Footer/>
            : pathname === '/' | pathname === '/home' ? <Footer/> :
            <div className={pathname!=='/masuk' | pathname!=='/daftar'?"space text-black-50" : "d-none"}>
                <p className="text-white">Footer d-none</p>
            </div>
}
        </div>
    )
}