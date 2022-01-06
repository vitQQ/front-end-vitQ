import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../components/button';
import {NavLink, useLocation} from 'react-router-dom'
import './styles/navbar.css'
import useWindowDimensions from '../helpers/WindowDimension';
import Logo from '../components/navbar/Logo';
import './styles/navbar.css'
import HomeIcon from '../components/navbar/HomeIcon';
import Sidebar from '../components/navbar/Sidebar';
import { MenuItemsData } from '../components/navbar/MenuItemData';
import { FiCircle } from "react-icons/fi";


export default function Navbar() {
    // variabel dibawah dipake kalo udah login udah di handle
    // const isLoggedIn = sessionStorage.getItem('user')
    let {pathname} = useLocation()
    let { width } = useWindowDimensions()
    return (
        <>
            {/* pathname === '/ ' harus diganti jadi `!islogged in kalo` bagian be login beres*/}
            <nav className={pathname === '/' | pathname === '/daftar' | pathname === '/masuk'? 'fixed-top bg-white' : width >= 768 ? 'fixed-top bg-white' : 'bg-white fixed-bottom'}>
                <div className={pathname === '/' ? '' : pathname === '/daftar' | pathname === '/masuk' ? 'p-3' : 'd-md-none d-block border-top shadow'}/>
                <div className='d-block d-sm-none'/>
                <Container className='d-block d-md-flex justify-content-between flex-wrap'>
                    <div className={ pathname === '/' | pathname === '/daftar' | pathname === '/masuk'? "d-flex align-items-center p-2" : "d-flex align-items-center d-none d-md-block p-2"}>
                        <Logo/>
                    </div>
                    <div>
                        <Sidebar/>
                        { pathname === '/'? 
                        // When user logout
                            <Row className='d-flex align-items-center justify-content-around d-none d-md-flex'>
                                <Col className='col-4'>
                                    <a className='text-decoration-none text-active' href='#caraKerja'>Cara Kerja?</a>
                                </Col>
                                <Col className='col-4'>
                                    <a className='text-decoration-none text-active' href='#introduction'>Apa itu VitQ?</a>
                                </Col>
                                <Col className='col-2 d-flex align-items-center'>
                                    <NavLink to='/masuk'>
                                        <Button nofill value={`Masuk`}/>
                                    </NavLink>
                                </Col>
                                <Col className='col-2 d-flex align-items-center'>
                                    <NavLink to='/daftar'>
                                        <Button value={`Daftar`}/>
                                    </NavLink>
                                </Col>
                            </Row>
                        :
                        // Check is sign-in or sign up page ?
                        pathname === '/masuk' | pathname=== '/daftar'? 
                        <div>
                            <Row className='d-flex align-items-center justify-content-around'>
                                <Col className={pathname=== '/daftar' ? 'd-none' : 'd-flex'}>
                                    <NavLink to='/daftar' className='text-decoration-none text-active'>Daftar</NavLink>
                                </Col>
                                <Col className='d-flex'>
                                    <NavLink to='/' className='text-decoration-none text-active nav-icon d-flex align-items-center'>
                                        <p className= "text-inactive nav-item m-2">Beranda</p>
                                        <HomeIcon className='mb-2'/>
                                    </NavLink>
                                </Col>
                            </Row>
                        </div> 
                        :
                        // When user logged in
                        <div className='navbar d-flex justify-content-center mt-2'>
                            {MenuItemsData.map(item =>
                                <Col>
                                    <NavLink to={item?.path} className='d-block d-md-flex justify-content-center justify-content-md-between text-decoration-none text-inactive fst-normal mx-2'>
                                        <div className='d-flex d-md-block justify-content-center mx-1'>
                                            {item?.title === 'Profile' ?                                         <FiCircle fill="#F5F9FF" color={pathname.includes(item?.path) ? "#0F4187":"#BCBCBC"} size={24}/>  
                                            :
                                            <svg width={item?.svg?.width} height={item?.svg?.height} viewBox={item?.svg?.viewBox} fill={item?.svg?.fill} xmlns={item?.svg?.xmlns}>
                                                <path d={item?.pathIcon?.d?.toString()} fill={pathname?.includes(item?.path) ?item?.pathIcon?.fill[0] : item?.pathIcon?.fill[1]} stroke={pathname?.includes(item?.path) ? item?.pathIcon?.stroke[0] : item?.pathIcon?.stroke[1]} 
                                                stroke-opacity={pathname?.includes(item?.path) ? item?.pathIcon?.stroke_opacity[0] : item?.pathIcon?.stroke_opacity[1]} stroke-width={item?.pathIcon?.stroke_width} stroke-linecap={item?.pathIcon?.stroke_linecap} stroke-linejoin={item?.pathIcon?.stroke_linejoin}
                                                />
                                            </svg>
                                            }
                                        </div>
                                        <div className='d-flex d-md-block justify-content-center px-1 pt-1'>
                                            {/* <p className={({isActive}) => isActive? "text-primary" : "text-inactive"}>Beranda</p> */}
                                            <p className={pathname.includes(item?.path) ? "text-primary-3" : "text-inactive"}>{item?.title}</p>
                                        </div>
                                    </NavLink>
                                </Col>
                            )}
                        </div>
                    }
                    </div>
                </Container>
                <div className={pathname==='/masuk'|pathname==='/daftar' ? 'd-none' : 'd-none d-md-block border-bottom shadow'}/>
            </nav>
        </>
    )
}