import React from "react";
import {Col, Container, Row } from "react-bootstrap";
// import Background from  "./assets/background@2x-100.jpg"
import ProfilPic from "./assets/Asset 3@2x-100.jpg"
import "./Akunku.css"
import { IoIosArrowForward } from "react-icons/io";
import { BsCircleFill  } from "react-icons/bs";

export default function Akunku() {
    return(
        <div className="mt-3 pt-5">
            <Container>
                {/* <img className="w-100" src={Background} alt="Background"></img> */}
                <div className="background-profil d-flex justify-content-center align-items-center flex-column flex-lg-row pt-3 pt-md-4 pt-lg-0">
                    <Col className="d-flex justify-content-center">
                        <img className="profilpic" src={ProfilPic} alt="Profil"></img>
                    </Col>
                    <Col className="text-primary-1 text-center text-lg-start">
                        <h1>Aku</h1>
                        <p>Pemerhati Lingkungan</p>
                    </Col>
                </div>
                <Row className="m-3 pt-4">
                    <Col className="shadow rounded-3">
                        <div className="p-3 bg-light d-flex justify-content-between">
                            <h6>Atur Profil</h6>
                            <IoIosArrowForward/>
                        </div>
                        <div className="p-3 bg-light d-flex justify-content-between">
                            <div className="d-flex justify-content-start">
                                <h6>Aktivitasku</h6>
                                <BsCircleFill className="pt-1" color="#E82D3D" size={12}/>
                            </div>
                            <IoIosArrowForward/>
                        </div>
                        <div className="p-3 bg-light d-flex justify-content-between">
                            <h6>Bantuan</h6>
                            <IoIosArrowForward/>
                        </div>
                        <div className="p-3 bg-light d-flex justify-content-between">
                            <h6>Privacy Policy</h6>
                            <IoIosArrowForward/>
                        </div>
                        <div className="p-3 bg-light d-flex justify-content-between">
                            <h6>Tentang Kami</h6>
                            <IoIosArrowForward/>
                        </div>
                    </Col>
                    <Col sm={12} md={5} className="ms-md-3 mt-4 mt-md-0">
                        <button className="text-primary-1 bg-secondary border-0 p-3 rounded-3 w-100">Keluar dari akun</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}