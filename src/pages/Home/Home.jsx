import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../components/button";
import { MessageSquare } from "react-feather";
import TREE from "../../components/tree";
import FOOD from "../../components/foodTime";
import "./assets/home.css";
import gambar from "./assets/aktivitas.png";
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <Container fluid className="px-0">
      <div className="mt-5 py-md-5">
        <Container>
          <div className="rounded p-3 border mt-5">
            <Row>
              <Col sm={6}>
                <Row>
                  <Col>
                    <div className="text-active fs-h3 fw-semibold">
                      Selamat Pagi
                    </div>
                    <div className="text-active fs-h2 fw-bold mb-3">
                      Apa yang ingin kamu lakukan?
                    </div>
                    <Col xl={3} md={4}>
                      <Button value="Kalkulasi" />
                    </Col>
                  </Col>
                </Row>
              </Col>
              <Col className="p-3">
                <div className="bg-secondary-1 rounded p-3 d-flex justify-content-center flex-column align-items-center">
                  <div className="mb-3">
                    <MessageSquare />
                  </div>
                  <div className="text-center">
                    “Jumlah kalori yang perlu Anda makan mungkin bukan standar
                    2.000.”
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div sm={12} className="mb-5">
            <Row className="mx-3">
              <Col md={6} sm={12}>
                <Row>
                  <Col md={10} sm={12} xs={12} className="rounded p-3 border mt-5">
                    <Row>
                      <Col sm={7} xs={7}>
                        <div className="text-active fs-h3 fw-semibold mb-2">
                          Angka Emisi kamu saat ini
                        </div>
                        <div className="fs-h2 fw-bold mb-2">0 Emisi</div>
                        <div className="fs-caption textInActive mb-3">
                          Asik, Emisi kamu menunjukkan hal yang baik
                        </div>
                      </Col>
                      <Col sm={5} xs={5} className=" rounded">
                        <div className="rounded p-3 bg-primary-1 h-100 d-flex justify-content-center flex-column align-items-center">
                          <img src={TREE.bad} alt=""></img>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col sm={12}  md={6}>
                <Row>
                  <Col md={10} sm={12} xs={12} className="rounded p-3 border mt-5 ms-auto">
                    <Row>
                      <Col xs={5} sm={5} className="m-auto">
                        <div className="m-auto">
                          <div className="fs-body fw-semibold text-center mb-3">
                            Kalorimu per hari
                          </div>
                          <div class="single-chart m-auto mb-3">
                            <svg
                              viewBox="0 0 36 36"
                              class="circular-chart green"
                            >
                              <path
                                class="circle-bg"
                                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                class="circle"
                                stroke-dasharray="30, 100"
                                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <text x="18" y="20.35" className="percentage ">
                                30%
                              </text>
                            </svg>
                          </div>
                          <div className="fs-subtitle fw-bold text-center text-primary-3">
                            0 / 1500 Kkal
                          </div>
                        </div>
                      </Col>
                      <Col xs={2} sm={2} className="m-auto">
                        <div className="m-auto lineCard"></div>
                      </Col>
                      <Col xs={5} sm={5} className="m-auto">
                        <div className="m-auto">
                          <div className="fs-body fw-semibold text-center mb-3">
                            Emisimu per hari
                          </div>
                          <div class="single-chart m-auto mb-3">
                            <svg viewBox="0 0 36 36" class="circular-chart red">
                              <path
                                class="circle-bg"
                                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                class="circle"
                                stroke-dasharray="30, 100"
                                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <text x="18" y="20.35" className="percentage ">
                                30%
                              </text>
                            </svg>
                          </div>
                          <div className="fs-subtitle fw-bold text-center text-secondary-2">
                            0 / 1500 Kkal
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>

        <div className="bg-primary-3 py-4">
          <Container>
            <div className="text-white fs-h2 fw-bold mb-3">
              Rekomendasi Nutrisi
            </div>
            <Row className="gy-3">
              <Col sm={6}>
                <Link className="link" to="/">
                <div className="rounded p-3 border bg-white pointer">
                  <Row>
                    <Col xs={6} md={4}>
                      <div className="rounded p-3 bg-primary-1 h-100 d-flex justify-content-center flex-column align-items-center">
                        <img src={FOOD.breakfast} alt=""></img>
                      </div>
                    </Col>
                    <Col className="m-auto">
                      <div className="fs-h3 fw-semibold">Sarapan</div>
                      <div className="d-none d-md-block d-lg-block d-xl-block">Mulai harimu dengan makanan gizi seimbang</div>
                    </Col>
                  </Row>
                </div>
                </Link>
              </Col>
              <Col sm={6}>
              <Link className="link" to="/">
                <div className="rounded p-3 border bg-white pointer">
                  <Row>
                    <Col xs={6} md={4}>
                      <div className="rounded p-3 bg-primary-1 h-100 d-flex justify-content-center flex-column align-items-center">
                        <img src={FOOD.lunch} alt=""></img>
                      </div>
                    </Col>
                    <Col className="m-auto">
                      <div className="fs-h3 fw-semibold">Makan siang</div>
                      <div className="d-none d-md-block d-lg-block d-xl-block">
                        Istirahat sejenak, pilih makanan yang memiliki gizi
                        seimbang
                      </div>
                    </Col>
                  </Row>
                </div>
                </Link>
              </Col>
              <Col sm={6}>
              <Link className="link" to="/">
                <div className="rounded p-3 border bg-white pointer">
                  <Row>
                    <Col xs={6} md={4}>
                      <div className="rounded p-3 bg-primary-1 h-100 d-flex justify-content-center flex-column align-items-center">
                        <img src={FOOD.dinner} alt=""></img>
                      </div>
                    </Col>
                    <Col className="m-auto">
                      <div className="fs-h3 fw-semibold">Makan malam</div>
                      <div className="d-none d-md-block d-lg-block d-xl-block">
                        Waktunya istirahat, cermat dalam memilih makanan agar
                        tetap sehat
                      </div>
                    </Col>
                  </Row>
                </div>
                </Link>
              </Col>
              <Col sm={6}>
                <Link className="link" to="/">
                <div className="rounded p-3 border bg-white pointer h-100">
                  <Row>
                    <Col xs={6} md={4}>
                      <div className="rounded p-3 bg-primary-1 h-100 d-flex justify-content-center flex-column align-items-center">
                        <img src={FOOD.snack} alt=""></img>
                      </div>
                    </Col>
                    <Col className="m-auto">
                      <div className="fs-h3 fw-semibold">Cemilan</div>
                      <div className="d-none d-md-block d-lg-block d-xl-block">Dampingi kegiatanmu dengan cemilan yang sehat</div>
                    </Col>
                  </Row>
                </div>
              </Link>
              </Col>
            </Row>
          </Container>
        </div>

        <Container className="mb-5">
          <div className="rounded p-3 border mt-5">
            <Row>
              <Col xs={12} md={6}>
                <div className="fw-bold fs-h2 mb-3">Cek Aktivitas</div>
                <div className="mb-4">
                  Setelah makan kamu meninggalkan emisi karbon, maka dari itu
                  kamu perlu melakukan kegiatan lingkungan
                </div>
                <Button value="Cek AktivitasMu" />
              </Col>
              <Col md={6} xs={12}>
                <div className="float-none float-lg-end">
                  <img className="w-100 h-100" src={gambar} alt=""></img>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Container>
  );
}
