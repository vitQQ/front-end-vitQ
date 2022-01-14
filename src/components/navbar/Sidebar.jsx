import React from "react";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import Button from "../button";
import './sidebar.css';
import { useLocation, useNavigate } from "react-router";

export default function Sidebar(){
    let {pathname} = useLocation()
    const navigate = useNavigate()
    const [sidebar, setSidebar] = useState(false)
    function showSidebar(){
        setSidebar(!sidebar)
    }
    return (
        <>
            <div className={pathname === '/' ? "sidebar d-flex justify-content-end d-md-none" : "d-none"}>
                <div onClick={showSidebar} className="d-inline w-auto toogler text-primary-3">
                    {sidebar? <BiX size={40}/> : <BiMenu size={40}/>}
                </div>
                <div className={!sidebar? 'menu' : 'menu active'}>
                    <div className="side-menu">
                            <>
                                <div className="p-2">
                                    <a onClick={showSidebar} className='text-decoration-none text-active menu-item' href='#cara-kerja'>Cara Kerja?</a>
                                </div>
                                <div className="p-2">
                                    <a className='text-decoration-none text-active menu-item' href='#apa-itu-vitq'>Apa itu VitQ?</a>
                                </div>
                                <div onClick={()=> navigate("/masuk")} className="menu-item">
                                    <Button nofill value={`Masuk`}/>
                                </div>
                                <div onClick={()=> navigate("/daftar")} className="menu-item">
                                    <Button value={`Daftar`}/>
                                </div>
                            </>
                    </div>
                </div>
            </div>
        </>
    )
}