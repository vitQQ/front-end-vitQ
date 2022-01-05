import React from "react";
import menanamPohon from "./assets/landingpage.png"
import hitungKaloriPic from "./assets/hitungKalori.png"
import jadilahPahlawanPic from "./assets/jadilahPahlawan.png"
import aktivitasmuPic from "./assets/aktivitasmu.png"
import aksiPic from "./assets/aksi.svg"
import kalkulasiDanDampakPic from "./assets/kalkukasidandampak.svg"
import pilihMakananPic from "./assets/pilihMakanan.svg"
import logoKemenkesPic from "./assets/logoKemenkes.png"
import logoGermasPic from "./assets/logoGermas.png"
import { Divide } from "react-feather";
import Layouts from "./../../layout";
import Button from "./../../components/button";

export default function LandingPage(){
    return(
        // <Layouts>
            <div className="container">
                {/*landing page*/}
                <div className="row d-flex justify-content-between my-5 align-items-center" id="landingPage">
                    <div className="col-lg-6 col-md-12 col-sm-12 g-lg-5 g-sm-3 g-xs-3 text-lg-start text-xl-start text-xxl-start text-center">
                        <h1 className="fs-display fw-bold">Jaga <span className="text-secondary-2">Kesehatanmu</span> dan Jaga <span className="text-primary-2">Planetmu</span></h1>
                        <p className="fs-body my-xxl-5 my-xl-5 my-lg-5 my-md-3 my-5">Ayo, Hitung kalorimu, sekaligus menghitung besaran emisimu pada dunia dan selamatkan mereka</p>
                        <button className="btn-primary my-xl-0 my-xxl-0 my-lg-0 my-md-0 mb-5 p-2 px-5 rounded">Mulai</button>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 p-0 mx-auto">
                        <img className="p-lg-0 p-xxl-0 p-md-0 px-3 w-100 mt-md-3" src={menanamPohon} alt="Menanam Pohon"/>
                    </div>
                </div>
                {/* section introduction */}
                <div id="introduction" className="my-3 py-5">
                    <div className="text-center my-5">
                        <h3 className="fs-h3 fw-bold">Apa itu VitQ</h3>
                        <p className="fs-body">Sebuah website aplikasi penghitung kalori dan emisi dari makanan dengan aksi aktivitas lingkungan untuk mengurangi emisi</p>
                    </div>
                    <div className="row d-flex gy-3">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                    <h5 className="fs-h3 fw-bold">Hitung KaloriMu</h5>
                                    <p>Ayo hitung kalorimu untuk menjaga kesehatan gizi diri</p>
                                </div>
                                <img className="w-100"src={hitungKaloriPic}></img>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                    <h5 className="fw-bold">Jadilah Pahlawan</h5>
                                    <p className="fs-body">Tunjukkan aksi dengan kurangi emisi makanan</p>
                                </div>
                                <img className="w-100" src={jadilahPahlawanPic}></img>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                    <h5 className="fw-bold">AktivitasMu</h5>
                                    <p className="fs-body">Rekomendasi aktivitas untuk mengurangi emisiMU</p>
                                </div>
                                <img className="w-100" src={aktivitasmuPic}></img>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section cara kerja */}
                <div id="caraKerja" className="my-3 py-5">
                    <div className="text-center my-5">
                        <h3 className="fw-bold fs-h3">Cara Kerja</h3>
                        <p className="fs-body">Bagaimana cara menggunakan aplikasi ini?</p>
                    </div>
                    <div className="row d-flex gy-3">
                        <div className="col-lg-4 col-xxl-4 col-xxl-4 col-md-6 col-12">
                            <div className="card p-lg-5 p-xl-5 p-xxl-5 p-md-2 p-sm-2">
                                <div className="row d-flex">
                                <div className="col-lg-12 col-xl-12 col-xxl-12 col-6 p-lg-0 p-xl-0 pxxl-0 p-3">
                                    <img className="w-100" src={pilihMakananPic}></img>
                                </div>
                                <div className="col-lg-12 col-xl-12 col-xxl-12 col-6 card-body text-lg-center ps-lg-0 ps-xxl-0 ps-xl-0 ps-md-3 ps-4">
                                    <h5 className="fw-bold fs-h3  mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-4">Pilih Makanan</h5>
                                    <p className="fs-body px-lg-4">Terdapat beberapa makanan yang dicantumkan secara kategorial</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xxl-4 col-xxl-4 col-md-6 col-12">
                            <div className="card p-lg-5 p-xl-5 p-xxl-5 p-md-2 p-sm-2">
                                <div className="row d-flex">
                                <div className="col-lg-12 col-xl-12 col-xxl-12 col-6 p-lg-0 p-xl-0 pxxl-0 p-3">
                                    <img className="w-100 img-fluid" src={kalkulasiDanDampakPic}></img>
                                </div>
                                <div className="col-lg-12 col-xl-12 col-xxl-12 col-6 card-body text-xxl-center text-lg-center text-lg-center ps-lg-0 ps-xxl-0 ps-xl-0 ps-md-3 ps-4">
                                    <h5 className="fw-bold fs-h3">Kalkulasi dan Dampak</h5>
                                    <p className="fs-body px-xxl-3 px-xl-3 px-lg-0">Lihat Kalkulasi emisi dan kalori dari makanan, serta dampak terhadap lingkungan</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xxl-4 col-xxl-4 col-md-6 col-12">
                            <div className="card p-lg-5 p-xl-5 p-xxl-5 p-md-2 p-sm-2">
                                <div className="row d-flex">
                                <div className="col-lg-12 col-xl-12 col-xxl-12 col-6 p-lg-0 p-xl-0 pxxl-0 p-3">
                                    <img className="w-100" src={aksiPic}></img>
                                </div>
                                <div className="col-lg-12 col-xl-12 col-xxl-12 col-6 card-body text-xxl-center text-lg-center text-lg-center ps-lg-0 ps-xxl-0 ps-xl-0 ps-md-3 ps-4">
                                    <h5 className="fs-h3 fw-bold">Lakukan Aksi</h5>
                                    <p  className="fs-body px-xxl-5 px-xl-5 px-lg-4 pt-lg-4 pt-xxl-0 pt-xl-0">Lakukan aktivitas yang berdampak positif pada lingkungan</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*section partner */}
                <div id="partner" className="my-3 py-5">
                    <div className="text-center my-5">
                        <h3 className="fw-bold fs-h3">Didukung Oleh</h3>
                        <p className="fs-body">Beberapa partner yang bekerja sama</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <center><img className="me-3" src={logoKemenkesPic}></img></center>
                        <center><img src={logoGermasPic}></img></center>
                    </div>
                </div>
            </div>
        //  </Layouts>
    )
}