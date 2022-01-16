import React from "react";
import FoodCard from "../../components/card/Card";
import { IoIosArrowBack } from "react-icons/io";
import { Col, Row } from "react-bootstrap";
import { IoHelpCircleOutline } from "react-icons/io5";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../helpers/WindowDimension";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";

export default function HasilKalkulasi() {
  let { width } = useWindowDimensions();
  const navigate = useNavigate();
  let kalkulasi = useSelector((currentState) => currentState.handleCalculateReducers);
  let sum_kalori = kalkulasi.reduce((a, b) => a + parseInt(b.cal * b.jumlah), 0).toFixed();
  let sum_emisi = kalkulasi.reduce((a, b) => a + b.emis * b.jumlah, 0).toFixed(2);
  const makanan_id = kalkulasi.reduce((a, b) => [...a, b.id], []);
  console.log(sum_kalori);
  // kalkulasi.map(e=>console.log(e.id))
  const result = {
    id_makanan: makanan_id,
    jumlah_kalori: sum_kalori,
    jumlah_emisi: sum_emisi,
  };

  console.log(result);
  console.log(kalkulasi);
  const handleClick = () => {
    axios
      .post(`${process.env.REACT_APP_URL}/user-makanan`, result, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const newData = response.data.data;
        console.log(newData);
        alert("Berhasil Memperbarui");
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className={width > 750 ? "m-4 p-5" : "m-3 px-3"}>
      <div className={width > 750 ? "mt-3 pt-4 px-4" : "mx-3 pt-1"}>
        <Link to="/kalkulasi" className="text-decoration-none">
          <div className="text-primary d-flex justify-content-start align-content-center mb-2 border-1">
            <Col className="d-flex align-items-center">
              <IoIosArrowBack></IoIosArrowBack>
            </Col>
            <Col className="col-6 col-md-12 px-md-3 d-flex justify-content-center justify-content-md-start align-items-center mt-1 pt-1">
              <h5 className="fs-body fw-bold">Kembali</h5>
            </Col>
            <Col className="d-flex justify-content-end d-md-none text-inactive pt-2">
              <IoHelpCircleOutline />
            </Col>
          </div>
        </Link>
      </div>
      <div className={width > 750 ? "rounded-3 shadow-lg m-3 pt-4 px-5" : ""}>
        <div className="px-3 pt-3 px-md-0">
          <h5 className="h-3">Kalkulasi makananmu</h5>
          <p className="fs-subtitle">Hasil Emisi dan Kalori dari makanan yang kamu pilih</p>
        </div>
        <div className="d-flex justify-content-between flex-column flex-lg-row">
          <div className="px-3 px-md-0 col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            {kalkulasi.map((item) => (
              <Row className="my-3">
                <FoodCard
                  key={item?.id}
                  id={item?.id}
                  image={item?.image}
                  title={item?.title}
                  categories={item?.categories}
                  cal={parseInt(item?.cal) * parseInt(item?.jumlah)}
                  emis={parseFloat(item?.emis) * parseInt(item?.jumlah)}
                  unit={item?.unit}
                  pro={parseInt(item?.pro) * parseInt(item?.jumlah)}
                  jumlah={item?.jumlah}
                />
              </Row>
            ))}
          </div>
          <div className="d-none d-md-flex col-2"></div>
          <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="mt-2 mt-lg-0 w-100 ">
              <div className="p-3 border rounded">
                <div className="row fs-subtitle fw-bold">
                  <div className="col-12 col-xxl-8 col-xl-8 col-lg-12 col-md-8 col-sm-8">
                    <p>Jumlah Kalori&emsp;&emsp;&emsp;&emsp;&emsp;: </p>
                  </div>
                  <div className="col-12 col-xxl-4 col-xl-4 col-lg-12 col-md-4 col-sm-4">
                    <p>{sum_kalori} kkal</p>
                  </div>
                </div>
                <div className="row fs-subtitle fw-bold">
                  <div className="col-12 col-xxl-8 col-xl-8 col-lg-12 col-md-8 col-sm-8">
                    <p>Jumlah Emisi Karbon&emsp; :</p>
                  </div>
                  <div className="col-12 col-xxl-4 col-xl-4 col-lg-12 col-md-4 col-sm-4">
                    <p>{sum_emisi} KgCo2e</p>
                  </div>
                </div>
              </div>
              <div className="p-2" onClick={handleClick}>
                <Button value="Selanjutnya"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
