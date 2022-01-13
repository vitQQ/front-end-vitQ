import React from "react";
import ayam from "./asset/ayam.svg";
import "./menuKalkulasi.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Cards from "../../components/card/Card";
import Carousel from "../../components/carousel/carousel";
import { useSelector } from "react-redux";

export default function MenuKalkalulasi() {
  const foodReducers = useSelector((currentState)=>currentState.foodReducers)
  console.log(foodReducers)
  return (
    <div className="rootbg mt-5">
      <div className="container my-5">
        <div className="row my-lg-5 my-xl-5 my-xxl-5 my-0 p-0 g-5">
          <div className="col-lg-8 col-xl-8 col-xxl-8 col-12 order-lg-first order-last">
            <div className="makananFavorit">
              <div className="row d-flex bg-white p-lg-5 p-xl-5 p-xxl-5 p-0 g-3">
                <div className="justify-content-between d-flex mb-2 text-primary-3">
                  <h3 className="fw-bold fs-h3">Makanan Favorit</h3>
                  <p>Lihat semua</p>
                </div>
                <Carousel show={2} className="carouselSection justify-content-between">
                <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-6 col-12 p-lg-2 p-xl-2 p-xxl-2 p-1">
                  <img className="w-100" src={ayam} alt="ayam"/>
                </div>
                <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-6 col-12 p-lg-2 p-xl-2 p-xxl-2 p-1">
                  <img className="w-100" src={ayam} alt="ayam" />
                </div>
                <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-6 col-12 p-lg-2 p-xl-2 p-xxl-2 p-1">
                  <img className="w-100" src={ayam} alt="ayam" />
                </div> 
                <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-6 col-12 p-lg-2 p-xl-2 p-xxl-2 p-1">
                  <img className="w-100" src={ayam} alt="ayam" />
                </div>    
                </Carousel>
                <Tabs
                  defaultActiveKey="All"
                  id="uncontrolled-tab-example"
                  className="fs-body"
                >
                  <Tab eventKey="All" title="All">
                    <div className="row bg-primary-1 p-3 d-flex g-3">
                        {foodReducers?.food?.map(item => 
                          <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-6 col-12">
                              <Cards 
                                  key={item?.id}
                                  main={item?.main}
                                  image={ayam}
                                  title={item?.title}
                                  categories={item?.categories}
                                  cal={item?.cal}
                                  emis={item?.emis}
                                  unit={item?.unit}
                                  pro={item?.pro}
                                  jumlah={item?.jumlah}
                              />  
                          </div> 
                          )}
                    </div>
                  </Tab>
                  <Tab eventKey="Karbohidrat" title="Karbohidrat">
                    <p>2</p>
                  </Tab>
                  <Tab eventKey="Lemak" title="Lemak">
                    <p>3</p>
                  </Tab>
                  <Tab eventKey="Serat" title="Serat">
                    <p>4</p>
                  </Tab>
                  <Tab eventKey="Vitamin" title="Vitamin">
                    <p>5</p>
                  </Tab>
                </Tabs>
                <button type="button" className="mt-3 btn btn-light text-white bg-white-200 w-100 d-block d-lg-none d-xxl-none d-xl-none">Hitung</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-4 col-xxl-4 col-12">
              <div className="row d-flex p-0 g-3">
            {/* <div className="row w-100 g-4 "> */}
              <div className="col-12 p-4 bg-white mt-0 mb-lg-4 mb-xl-4 mb-xxl-4 mb-0">
                <form className="mb-lg-5 mb-xl-5 mb-xxl-5 mb-0">
                  <input
                    type="search"
                    className="mb-lg-5 mb-xl-5 mb-xxl-5 mb-0 form-control form-control-dark bg-white-100 fs-subtitle"
                    placeholder="Cari Makanan"
                    aria-label="Search"
                  />
                  <center className="py-0 my-0">
                    <p className="my-lg-5 my-xl-5 my-xxl-5 my-0 py-xl-5 py-xxl-5 py-lg-5 py-0 d-lg-block d-xl-block d-xxl-block d-none">Yuk Cari Makanan Kamu</p>
                  </center>
                </form>
              </div>
              <div className="col-12 bg-white p-3 d-none d-lg-block d-xxl-block d-xl-block">
                <div className="align-items-center">
                  <center>
                    <h3 className="fs-h3 fw-semibold">Hasil Kalkulasi</h3>
                      <p className="my-5 py-5">Belum ada</p>
                  </center>
                </div>
                <button type="button" className="btn btn-light text-white bg-white-200 w-100">Hitung</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="d-none d-md-block" />
    </div>
  );
}
