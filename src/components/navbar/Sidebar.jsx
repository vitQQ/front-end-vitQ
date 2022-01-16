import React from "react";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import Button from "../button";
import './sidebar.css';
import { useLocation, useNavigate } from "react-router";
import {Col} from "react-bootstrap"

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
                    <div className="side-menu px-5">
                            <>
                                <div className="p-2">
                                    <a onClick={showSidebar} className='text-decoration-none text-active' href='#caraKerja'>Cara Kerja?</a>
                                </div>
                                <div className="p-2">
                                    <a className='text-decoration-none text-active' href='#introduction'>Apa itu VitQ?</a>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Col>
                                        <div onClick={()=> navigate("/masuk")}>
                                            <Button nofill value={`Masuk`}/>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div onClick={()=> navigate("/daftar")}>
                                            <Button value={`Daftar`}/>
                                        </div>
                                    </Col>
                                </div>
                            </>
                    </div>
                </div>
            </div>
        </>
    )
}