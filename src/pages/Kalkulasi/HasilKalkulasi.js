import React, {useEffect} from "react";
import FoodCard from '../../components/card/Card'
import { IoIosArrowBack } from "react-icons/io";
import { Col, Row } from "react-bootstrap";
import { IoHelpCircleOutline } from "react-icons/io5";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../helpers/WindowDimension"
import { useSelector } from "react-redux";
import axios from "axios";

export default function HasilKalkulasi(){
    let {width} = useWindowDimensions()
    let kalkulasi = useSelector((currentState)=>currentState.handleCalculateReducers)
    console.log(kalkulasi)
    let jumlah_kalori = kalkulasi.reduce((a,b)=>a+parseInt(b.cal), 0)
    let jumlah_emisi = kalkulasi.reduce((a,b)=>a+parseInt(b.emis), 0)
    useEffect(() => {
        axios({
          method: "get",
          url : "http://localhost:3003/user-makanan/61dfb21ec5e51914c11e4588",
        })
        .then(resp=>{
          const foods = resp.data
          console.log(foods)
        })
        .catch(e=>console.log(e))
      }, [kalkulasi])
    return(
        <div className={width>750? "m-4 py-5" : "my-3 px-3"}>
            <div className={width>750?"mt-3 pt-4 px-4" : "mx-3 pt-1"}>
                <Link to="/kalkulasi" className="text-decoration-none">
                    <div className="text-primary d-flex justify-content-start align-content-center mb-2 border-1">
                        <Col className="d-flex align-items-center">
                            <IoIosArrowBack></IoIosArrowBack>
                        </Col>
                        <Col className="col-6 col-md-12 px-md-3 d-flex justify-content-center justify-content-md-start align-items-center mt-1 pt-1">
                            <h5 className="fs-body fw-bold">Kembali</h5>
                        </Col>
                        <Col className="d-flex justify-content-end d-md-none text-inactive pt-2"><IoHelpCircleOutline/></Col>
                    </div>
                </Link>
            </div>
            <div className={width>750? "rounded-3 shadow-lg m-3 pt-4 px-5" : ""}>
                <div className="px-3 pt-3 px-md-0">
                    <h5 className="h-3">Kalkulasi makananmu</h5>
                    <p className="fs-subtitle">Hasil Emisi dan Kalori dari makanan yang kamu pilih</p>
                </div>
                <div className="d-flex justify-content-between flex-column flex-lg-row">
                    <Col className="px-3 px-md-0">
                        {kalkulasi.map(item => 
                            <Row className="my-3">
                                <FoodCard
                                    id={item?.id}
                                    image={item.url_image}
                                    title={item?.title}
                                    categories={item?.categories}
                                    cal={item?.cal}
                                    emis={item?.emis}
                                    unit={item?.unit}
                                    pro={item?.pro}
                                    jumlah={item?.jumlah}
                                    />
                            </Row>
                        )}
                    </Col>
                    <div className="d-none d-md-flex col-3"></div>
                    <Col>
                        <div className="mt-2 mt-lg-0 w-100 ">
                            <div className="p-3 border rounded">
                                <div className="d-flex justify-content-between fs-subtitle">
                                    <p>Jumlah Kalori :</p>
                                    <p>{jumlah_kalori} kkal</p>
                                </div>
                                <div className="d-flex justify-content-between fs-subtitle">
                                    <p>Jumlah Emisi Karbon :</p>
                                    <p>{jumlah_emisi} KgCo2e</p>
                                </div>
                                <div className="d-flex justify-content-between fs-body">
                                    <h6>Total Points :</h6>
                                    <h6>1000 Points</h6>
                                </div>   
                            </div>
                            <div className="p-2">
                                <Button value="Selanjutnya"></Button>
                            </div>

                        </div>
                    </Col>
                </div>
            </div>
        </div>
    )
}