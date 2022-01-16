import React, { useEffect,useState } from "react";
import ayam from "./asset/ayam.svg";
import "./menuKalkulasi.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Cards from "../../components/card/Card";
import Button from "../../components/button";
import Carousel from "../../components/carousel/carousel";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getFood} from "../../redux/action/action.food"
import useWindowDimensions from "../../helpers/WindowDimension"

export default function MenuKalkalulasi() {
  let {width} = useWindowDimensions()
  let navigate = useNavigate()
  let food = useSelector((currentState)=>currentState.foodReducers.food)
  let kalkulasi = useSelector((currentState)=>currentState.handleCalculateReducers)
  const dispatch = useDispatch()
  // get all Food
  useEffect(() => {
    dispatch(getFood())
  }, [dispatch])

  const handleClick =()=>{
    navigate('/kalkulasi/hasilkalkulasi')
  }

  const [q, setQ] = useState("");
  const [searchParam] = useState(["namaMakanan"]);

  function searchFood(food) {
    return food.filter(item => {
      return searchParam.some(newFood => {
        return (
          item[newFood].
          toString().
          toLowerCase().
          indexOf(q.toLowerCase()) > -1);
      });
    });
  }
  return (
    <div className={width>750? "rootbg mt-5" : ""}>
      <div className={width>750? "container my-5" : "container"}>
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
                    <div className="row bg-primary-1 p-2 d-flex g-3">
                        {searchFood(food).map(item =>
                          <div className="px-2 col-lg-6 col-xl-4 col-xxl-4 col-md-6 col-sm-6 col-6">
                              <Cards 
                                  key={item?.id}
                                  id={item?._id}
                                  main
                                  image={item?.url_image}
                                  title={item?.namaMakanan}
                                  categories={item?.categories}
                                  unit={item?.unit}
                                  cal={item?.kalori.toFixed()}
                                  emis={item?.emisi}
                                  pro={item?.protein}
                                  jumlah={item?.jumlah}
                              />  
                          </div>
                          )}
                    </div>
                  </Tab>
                </Tabs>
                <div className="sticky-button d-lg-none" onClick={handleClick}>
                  {kalkulasi.length!==0?
                  <Button value="Hitung"/> : <Button disabled value="Hitung"/>
                }
                </div>
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
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                  />
                </form>
              </div>
              <div className="col-12 bg-white p-3 d-none d-lg-block d-xxl-block d-xl-block">
                <div className="align-items-center">
                  <center>
                    <h3 className="fs-h3 fw-semibold">Hasil Kalkulasi</h3>
                      {kalkulasi.length===0?
                        <p className="my-5 py-5">Belum ada</p>
                        :
                        kalkulasi.map(item=>
                          <p>{item?.title}</p>
                        )
                      }
                  </center>
                </div>
                <div onClick={handleClick}>
                  {kalkulasi.length!==0?
                  <Button value="Hitung"/> : <Button disabled value="Hitung"/>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="d-none d-md-block" />
    </div>
  );
}
