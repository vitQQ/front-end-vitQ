import React from "react";
import { Row, Col } from "react-bootstrap";
import "./styles/footer.css";

export default function Footer() {
  return (
    <div className="mt-auto pb-5 bg-primary-1 fs-subtitle">
      <div className="py-5 container text-active">
        <Row className="mb-3 mb-sm-5 footerLink">
          <Col sm={4} lg={4} md={4} xs={6}>
            <Row className="gy-3">
              <Col href="#" sm={12}>
                <a href="https://www.dancommunity.co.id/id">Tentang Kami</a>
              </Col>
              <Col sm={12}>
                <a href="https://www.dancommunity.co.id/id">Syarat dan Ketentuan</a>
              </Col>
              <Col sm={12}>
                <a href="https://www.dancommunity.co.id/id">Privacy and Policy</a>
              </Col>
            </Row>
          </Col>
          <Col sm={4} lg={5} md={4} xs={6}>
            <Row className="gy-3">
              <Col sm={12}>
                <a href="https://www.dancommunity.co.id/id">Bantuan</a>
              </Col>
              <Col sm={12}>
                <a href="https://www.dancommunity.co.id/id">Kontak</a>
              </Col>
            </Row>
          </Col>
          <Col sm={4} lg={3} md={4} className="mt-1 mt-sm-4 text-center text-inactive">
            Copyright &copy; 2022 VitQ
          </Col>
        </Row>
      </div>
    </div>
  );
}
