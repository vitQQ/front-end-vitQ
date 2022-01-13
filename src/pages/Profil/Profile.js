import React from "react";
import female from "./female.svg"
import male from "./male.svg"
import back from "./back.svg"
import "./profile.css"

export default function EditProfile() {
    return(
        <div className="container mt-5">
            <div id="back" className="mt-5 d-flex align-items-center">
                <img className="" src={back} alt="" />
                <p className="fw-bold text-primary mt-3"> Kembali</p>
            </div>
            <div id="aturProfile" className="p-5 bg-primary-3 text-white">
                <h2>Atur Profile </h2>
                <p>Data dirimu menentukan besarnya calori yang dapat dikonsumsi oleh tubuh</p>
            </div>
            <div className="row ms-3 my-5">
                <div className="col-lg-8 col-xl-8 col-xxl-8 col-12">
                    <div className="umurdanJenisKelamin my-5">
                        <p className="fs-h3 fw-bold text-primary-3">Umur dan Jenis Kelamin</p>
                        <div className="row justify-content-start">
                            <div className="col-lg-4 col-xxl-4 col-xl-4 col-md-4 col-sm-6 col-6">
                                <input type="text" className="py-2" id="validationServer03" aria-describedby="validationServer03Feedback" placeholder="e.g 20"required />
                            </div>
                            <div className="col-lg-2 col-xl-2 col-xxl-2 col-3 col-gender px-auto">     
                                <input type="radio" className="form-check-input input-hidden py-2" id="male" name="radio-stacked" required />
                                <center>
                                    <label for="male">
                                    <img
                                        src={male} 
                                        alt="I'm sad"
                                        className="px-lg-3 px-xl-3 px-xxl-3 px-md-2 px-sm-2 px-2 py-1 img-gender" />
                                    </label>
                                </center>
                            </div>
                            <div className="col-lg-2 col-xl-2 col-xxl-2 col-3 col-gender py-0">
                            <input type="radio" class="form-check-input input-hidden py-2" id="female" name="radio-stacked" required />
                            <center>
                                <label for="female">
                                <img 
                                        src={female} 
                                        alt="I'm sad" 
                                        className="px-lg-3 px-xl-3 px-xxl-3 px-md-3 px-sm-3 px-2 py-1 img-gender"/>
                                    </label>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="beratdantinggibadan my-5">
                    <p className="fs-h3 fw-bold text-primary-3">Berat dan Tinggi Badan</p>
                        <div className="row gx-5 d-flex align-items-center">
                            <div className="col-lg-3 col-xl-3 col-xxl-3 col-4 d-flex align-items-center">
                                <input type="text" className="p-2 w-100" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                                <p className="ms-2 mt-3">Kg</p>
                            </div>
                            <div className="col-lg-3 col-xl-3 col-xxl-3 col-4 d-flex align-items-center">
                                <input type="text" className="p-2 w-100" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                                <p className="ms-2 mt-3">Cm</p>
                            </div>
                        </div>
                    </div>
                    <div className="beratdantinggibadan my-5">
                    <p className="fs-h3 fw-bold text-primary-3">Level Aktivitas atau Olahraga</p>
                        <div className="row gx-5 d-flex align-items-center">
                            <div className="col-8 d-flex align-items-center">
                                <div className="select w-100">
                                    <select className="custom-select w-100 m-auto m-3 p-2">
                                        <option value="All">Pilih Level Aktivitasmu</option>
                                        <option value="sangat sedikit atau tidak sama sekali">sangat sedikit atau tidak sama sekali</option>
                                        <option value="rutin setiap hari">rutin setiap hari</option>
                                    </select>
                                    <span className="focus"></span>
                                    <button className="w-100 p-2 my-5 btn-primary-3 text-white rounded-3">Selesai</button>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-lg-block d-xl-block d-xxl-block d-none rounded-3">
                    <div className="bg-secondary-1 p-5">
                        <h2 className="fs-h3 fw-bold">Trivia</h2>
                        <h3 className="fs-h3 mb-3">Kalori yang dibutuhkan oleh manusia</h3>
                        <h3 className="fs-h3 fw-bold">Laki-laki</h3>
                        <ul className="fs-h3">
                            <li>19–30 years	2,400–3,000 calories</li>
                            <li>31–59 years	2,200–3,000 calories</li>
                            <li>60+ years	2,000–2,600 calories</li>
                        </ul>
                        <h3 className="fs-h3 fw-bold">Perempuan</h3>
                        <ul className="fs-h3">
                            <li>19–30 years	2,000–2,400 calories</li>
                            <li>31–59 years	1,800–2,200 calories</li>
                            <li className="mb-3">60+ years	1,600–2,000 calories</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}