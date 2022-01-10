import React from "react";
import daftarPic from "./assets/daftarPic.svg"
import facebookLogo from "./assets/facebookLogo.svg"
import googleLogo from "./assets/googleLogo.svg"
import { Link } from "react-router-dom";
import "./daftar.css"

export  default function Daftar(){
    return(
        <div className="container px-0 py-3">
            <div className="row my-5 py-5">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-12 order-12 order-lg-first order-xxl-first order-xl-first order-last my-5">
                <form className="row g-3 border border-light px-3 py-3">
                    <h1 className="fs-display fw-bold text-primary">Daftar</h1>
                    <h3 className="fs-h3 text-active mb-5">Buat akunmu untuk menelusuri fitur-fitur menarik dari VitQ</h3>
                    <div className="col-12 mb-3">
                        <label for="validationServer01" className="form-label fs-h3 text-active fw-semibold">Nama</label>
                        <input type="text" placeholder="e.g joko" className="form-control" id="validationServer01"required />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="validationServer01" className="form-label fs-h3 text-active fw-semibold">Email</label>
                        <input type="text" placeholder="e.g joko@gmail.com" className="form-control" id="validationServer01"required />
                    </div>
                    <div className="col-12 mb-4">
                        <label for="validationServer01" className="form-label fs-h3 text-active fw-semibold">Password</label>
                        <input type="text" className="form-control" id="validationServer01"required />
                        <p className="my-2 text-disable fs-subtitle">Dengan mendaftar, saya menyetujui  <Link to={`/`}><span className="text-primary-3"> syarat dan ketentuan </span></Link>
                            syarat dan <Link to={`/`}><span className="text-primary-3"> ketentuan serta kebijakan privasi.</span></Link>
                        </p>
                    </div>
                    <div className="col-12">
                        <Link to={`/`}>
                            <button className="btn btn-primary w-100" type="submit">Daftar</button>
                        </Link>
                    </div>
                    <p className="text-inactive fs-body text-center">Sudah punya akun?
                         <Link to={`/masuk`}>
                            Masuk
                         </Link>
                    </p>
                    <div className="col-12 my-5">
                        <div className="d-flex justify-content-center">
                            <Link to={`/`}>
                                <div className="logoSosmed">
                                    <center><img className="me-3 hover-shadow" src={facebookLogo} alt="logoFacebook"></img></center>   
                                </div>                        
                            </Link>
                            <Link to={`/`}>
                                <div className="logoSosmed">
                                    <center><img src={googleLogo} alt="logoGoogle"></img></center>
                                </div>
                            </Link>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="col-9 col-xxl-7 col-xl-7 col-lg-7 m-auto my-5">
                    <img className="w-100" src={daftarPic} alt="loginpicture" />
                </div>
            </div>
        </div>
    )
}