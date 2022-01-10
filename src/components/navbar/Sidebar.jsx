import React from "react";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { NavLink } from "react-bootstrap";
import Button from "../button";
import './sidebar.css';
import { useLocation } from "react-router";

export default function Sidebar(){
    const [sidebar, setSidebar] = useState(false)
    function showSidebar(){
        setSidebar(!sidebar)
    }
    let {pathname} = useLocation()
    return (
        <>
            <div className={pathname === '/' ? "sidebar d-flex justify-content-end d-md-none" : "d-none"}>
                <div onClick={showSidebar} className="d-inline w-auto toogler text-primary-3">
                    {sidebar? <BiX size={40}/> : <BiMenu size={40}/>}
                </div>
                <div className={!sidebar? 'menu' : 'menu active'}>
                    <div className="side-menu">
                            <>
                                <div className="menu-item">
                                    <a onClick={showSidebar} className='text-decoration-none text-active menu-item' href='#cara-kerja'>Cara Kerja?</a>
                                </div>
                                <div className="menu-item">
                                    <a onClick={showSidebar} className='text-decoration-none text-active menu-item' href='#apa-itu-vitq'>Apa itu VitQ?</a>
                                </div>
                                <NavLink to='/masuk'>
                                    <div className="menu-item">
                                        <Button nofill value={`Masuk`}/>
                                    </div>
                                </NavLink>
                                <div onClick={showSidebar} className="menu-item">
                                    <NavLink to='/daftar'>
                                        <Button value={`Daftar`}/>
                                    </NavLink>
                                </div>
                            </>
                    </div>
                </div>
            </div>
        </>
    )
}