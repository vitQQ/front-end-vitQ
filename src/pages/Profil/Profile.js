import React, { useEffect, useState } from "react";
import female from "./female.svg";
import male from "./male.svg";
import { Col } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import useWindowDimensions from "../../helpers/WindowDimension";
import "./profile.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { home } from "../../redux/action/action.user";
import Loading from "../../components/loading/loading";
import ModalLoading from "../../components/modal/ModalLoading";

export default function EditProfile() {
  const [isLoading, setLoading] = useState(true);
  const [postLoading, setpostLoading] = useState(false);

  let { width } = useWindowDimensions();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReducers);

  const { user } = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setpostLoading(true)
    console.log(typeof data.activity_level);
    const { umur, tinggi_badan, berat_badan, activity_level } = data;
    const result = {
      ...data,
      umur: parseInt(umur),
      tinggi_badan: parseInt(tinggi_badan),
      berat_badan: parseInt(berat_badan),
      activity_level: parseInt(activity_level),
    };

    console.log(result);
    axios
      .put(`${process.env.REACT_APP_URL}/user`, result, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setpostLoading(false)
        console.log(response.data);
        alert("Berhasil Memperbarui");
      })
      .catch((error) => {
        setpostLoading(false)
        console.log(error.message);
      });
  };

  useEffect(() => {
    dispatch(home());
    const load = () => (user?.result ? setLoading(false) : setLoading(true));
    load();
  }, [dispatch, user?.result]);

  useEffect(() => {
    const exist = localStorage.getItem("token");
    console.log(exist);
    if (!exist) {
      return navigate("/masuk");
    }
  }, [navigate]);

  return (
    <>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <>
        <div className="container mt-5">
          <Link className="link" to="/akunku">
            <div
              className={
                (width > 750 ? "mt-5" : "") +
                " text-primary d-flex justify-content-start align-content-center mb-2 border-1"
              }
            >
              <Col className="d-flex align-items-center">
                <IoIosArrowBack></IoIosArrowBack>
              </Col>
              <Col className="col-6 col-md-12 px-md-3 d-flex justify-content-center justify-content-md-start align-items-center mt-1 pt-1">
                <h5 className="fs-body fw-bold">Kembali</h5>
              </Col>
              <Col className="d-flex justify-content-end d-md-none text-inactive pt-2">
                {/* <IoHelpCircleOutline /> */}
              </Col>
            </div>
          </Link>
          <div id="aturProfile" className="p-5 bg-primary-3 text-white">
            <h2>Atur Profile </h2>
            <p>
              Data dirimu menentukan besarnya calori yang dapat dikonsumsi oleh
              tubuh
            </p>
          </div>
          <div className="row my-5 mx-1 p-3 border rounded">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="col-lg-7 col-xl-7 col-xxl-7 col-12"
              noValidate
            >
              <div className="umurdanJenisKelamin my-5">
                <p className="fs-h3 fw-bold text-primary-3">
                  Umur dan Jenis Kelamin
                </p>
                <div className="row justify-content-start">
                  <div className="col-lg-4 col-xxl-4 col-xl-4 col-md-4 col-sm-6 col-6">
                    <input
                      type="number"
                      {...register("umur", { required: true })}
                      className={
                        errors?.umur
                          ? "is-invalid form-control"
                          : "form-control"
                      }
                      placeholder="cth. 20"
                      defaultValue={user.length !== 0 ? user.result.umur : null}
                    />
                    {/* <div className="invalid-feedback">
                  {errors.umur &&
                    errors.umur.type === "required" &&
                    "Umur belum diisi"}
                </div> */}
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-6 col-gender px-auto">
                        <input
                          {...register("jenisKelamin", { required: true })}
                          type="radio"
                          className={
                            errors?.jenisKelamin
                              ? "is-invalid form-check-input input-hidden py-2"
                              : "form-control input-hidden py-2"
                          }
                          id="male"
                          value="L"
                          {...(user.length !== 0
                            ? user.result.jenisKelamin === "L"
                              ? { checked: true }
                              : null
                            : null)}
                        />
                        <center>
                          <label htmlFor="male">
                            <img
                              src={male}
                              alt="I'm sad"
                              className="px-lg-3 px-xl-3 px-xxl-3 px-md-3 px-sm-3 px-2 py-1 img-gender"
                            />
                          </label>
                        </center>
                      </div>
                      <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-6 col-gender py-0">
                        <input
                          {...register("jenisKelamin", { required: true })}
                          type="radio"
                          class={
                            errors?.jenisKelamin
                              ? "is-invalid form-check-input input-hidden py-2"
                              : "form-control input-hidden py-2"
                          }
                          id="female"
                          value="P"
                          {...(user.length !== 0
                            ? user.result.jenisKelamin === "P"
                              ? { checked: true }
                              : null
                            : null)}
                        />
                        <center>
                          <label htmlFor="female">
                            <img
                              src={female}
                              alt="I'm sad"
                              className="px-lg-3 px-xl-3 px-xxl-3 px-md-3 px-sm-3 px-2 py-1 img-gender"
                            />
                          </label>
                        </center>
                      </div>
                    </div>
                    {/* <div className="invalid-feedback d-block mt-3">
                  {errors.jenisKelamin &&
                    errors.jenisKelamin.type === "required" &&
                    "Jenis Kelamin Belum di pilih"}
                </div> */}
                  </div>
                </div>
              </div>
              <div className="beratdantinggibadan my-5">
                <p className="fs-h3 fw-bold text-primary-3">
                  Berat dan Tinggi Badan
                </p>
                <div className="row gx-5 d-flex align-items-center">
                  <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-sm-4 col-6 d-flex align-items-center">
                    <input
                      type="number"
                      {...register("berat_badan", { required: true })}
                      className={
                        errors?.berat_badan
                          ? "is-invalid form-control"
                          : "form-control"
                      }
                      defaultValue={
                        user.length !== 0 ? user.result.berat_badan : null
                      }
                    />
                    <p className="ms-2 mt-3">Kg</p>
                    {/* <div className="invalid-feedback">
                  {errors.berat_badan &&
                    errors.berat_badan.type === "required" &&
                    "Umur belum diisi"}
                </div> */}
                  </div>
                  <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-sm-4 col-6 d-flex align-items-center">
                    <input
                      type="number"
                      {...register("tinggi_badan", { required: true })}
                      className={
                        errors?.tinggi_badan
                          ? "is-invalid form-control"
                          : "form-control"
                      }
                      defaultValue={
                        user.length !== 0 ? user.result.tinggi_badan : null
                      }
                    />
                    {/* <div className="invalid-feedback">
                  {errors.tinggi_badan &&
                    errors.tinggi_badan.type === "required" &&
                    "Umur belum diisi"}
                </div> */}
                    <p className="ms-2 mt-3">cm</p>
                  </div>
                </div>
              </div>
              <div className="beratdantinggibadan my-5">
                <p className="fs-h3 fw-bold text-primary-3">
                  Level Aktivitas atau Olahraga
                </p>
                <div className="row gx-5 d-flex align-items-center">
                  <div className="col-12 col-xxl-8 col-xl-8 col-lg-8 col-md-8 d-flex align-items-center">
                    <div className="select w-100">
                      <select
                        {...register("activity_level", { required: true })}
                        className={
                          errors?.activity_level
                            ? "is-invalid form-select w-100 m-auto m-3 p-2"
                            : "form-select w-100 m-auto m-3 p-2"
                        }
                      >
                        <option selected value="" disabled>
                          Pilih Level Aktivitasmu
                        </option>
                        <option
                          {...(user.length !== 0
                            ? user.result.activity_level === 1
                              ? { selected: true }
                              : null
                            : null)}
                          value={parseInt("1")}
                        >
                          sangat sedikit atau tidak sama sekali
                        </option>
                        <option
                          {...(user.length !== 0
                            ? user.result.activity_level === 2
                              ? { selected: true }
                              : null
                            : null)}
                          value={parseInt("2")}
                        >
                          Sedikit aktif (1-3 hari/minggu)
                        </option>
                        <option
                          {...(user.length !== 0
                            ? user.result.activity_level === 3
                              ? { selected: true }
                              : null
                            : null)}
                          value={parseInt("3")}
                        >
                          Sedang (3-5 hari/minggu)
                        </option>
                        <option
                          {...(user.length !== 0
                            ? user.result.activity_level === 4
                              ? { selected: true }
                              : null
                            : null)}
                          value={parseInt("4")}
                        >
                          Sangat aktif (6-7 hari/minggu
                        </option>
                        <option
                          {...(user.length !== 0
                            ? user.result.activity_level === 5
                              ? { selected: true }
                              : null
                            : null)}
                          value={parseInt("5")}
                        >
                          rutin setiap hari (pekerja fisik / olahragawan)
                        </option>
                      </select>
                      <span className="focus"></span>
                      <div className="col-sm-12">
                        <button
                          className="w-100 p-2 my-5 btn-primary-3 text-white rounded-3 w-100"
                          type="submit"
                        >
                          Selesai
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="col-5 mt-3 d-none d-lg-block d-xl-block d-xxl-block rounded mb-3">
              <div className="bg-secondary-1 p-5 rounded">
                <h2 className="fs-h3 fw-bold">Trivia</h2>
                <h3 className="fs-h3 mb-3">
                  Kalori yang dibutuhkan oleh manusia
                </h3>
                <h3 className="fs-h3 fw-bold">Laki-laki</h3>
                <ul className="fs-h3">
                  <li>19—30 years 2,400—3,000 calories</li>
                  <li>31—59 years 2,200—3,000 calories</li>
                  <li>60+ years 2,000—2,600 calories</li>
                </ul>
                <h3 className="fs-h3 fw-bold">Perempuan</h3>
                <ul className="fs-h3">
                  <li>19—30 years 2,000—2,400 calories</li>
                  <li>31—59 years 1,800—2,200 calories</li>
                  <li className="mb-3">60+ years 1,600—2,000 calories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ModalLoading set={postLoading} />
        </>
      )}
    </>
  );
}
