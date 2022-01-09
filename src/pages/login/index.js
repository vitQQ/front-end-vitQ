import React from "react";
import daftarPic from "./assets/daftarPic.svg"
import facebookLogo from "./assets/facebookLogo.svg"
import googleLogo from "./assets/googleLogo.svg"
import { Link } from "react-router-dom";
import "./login.css"

export  default function Login(){
    return(
        <div className="container px-0 py-3">
            <div className="row my-5 py-5">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-12 order-12 order-lg-first order-xxl-first order-xl-first order-last my-5">
                <form className="row g-3 border border-light px-3 py-3">
                    <h1 className="fs-display fw-bold text-primary">Masuk</h1>
                    <h3 className="fs-h3 text-active mb-5">Apakah kami mengenal Kamu?Ayo, Lanjutkan kegiatanmu</h3>
                    <div className="col-12 mb-3">
                        <label for="validationServer01" className="form-label fs-h3 text-active fw-semibold">Email</label>
                        <input type="text" placeholder="e.g joko@gmail.com" className="form-control" id="validationServer01"required />
                    </div>
                    <div className="col-12 mb-4">
                        <label for="validationServer01" className="form-label fs-h3 text-active fw-semibold">Password</label>
                        <input type="text" className="form-control" id="validationServer01"required />
                        <p className="my-2 fs-subtitle" style={{color:"#485860"}}>Lupa Password? 
                            <Link to={`/`}><span className="text-primary-3"> klik di sini</span></Link>
                        </p>
                    </div>
                    <div className="col-12">
                        <Link to={`/`}>
                            <button className="btn btn-primary w-100" type="submit">Masuk</button>
                        </Link>
                    </div>
                    <div className="col-12 justify-content-between divider text-center d-flex mt-5">
                        <table width="100%">
                            <tr>
                                <td><hr /></td>
                                <td className="fs-body" style={{width:"1px", padding: "0 10px", whiteSpace: "nowrap", color:"#485860"}}>atau masuk dengan</td>
                                <td><hr /></td>
                            </tr>
                        </table>
                    </div>
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