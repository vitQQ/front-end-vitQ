import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
// import {getFood, postFood} from "../../redux/action/action.food"
import {addFood, deleteFood} from "../../redux/action/action.calculate"

// Pro props need to be fixed soon
export default function Cards({ id, main, image, title, categories, cal, emis, unit, pro, jumlah }) {
  const handleRemove = (id) => {
    addFood(id)
  }
  const handleAdd = (id) => {
    deleteFood(id)
  }
  return (
    <>
      {main ? (
        <Card className="border-white-100">
          <div className="pt-3 ps-3 pe-3">
            <Card.Img
              style= {{ height: 160, objectFit: "cover" }}
              className="rounded"
              variant="top"
              src={image}
            />
          </div>
          <Card.Body>
            <Card.Title className="text-active fw-bold fs-subtitle mb-1">
              {title}
            </Card.Title>
            <Card.Text className="text-active fs-caption mb-1">
              {categories}
            </Card.Text>
            <Row className="m-0 gx-2">
              <Col
                xs={5}
                className="badge bg-secondary-1 text-active fw-normal me-2"
              >
                {cal} Kkal
              </Col>
              <Col
                xs={5}
                className="badge bg-secondary-1 text-active fw-normal"
              >
                {emis} CO2e
              </Col>
            </Row>
            <Row className="m-0 mt-3 gx-2">
              <Col xs={7} className="p-0">
                <Row className="bg-white-100 p-1 rounded m-0">
                  <Col xs={4} className="fw-bold fs-subtitle p-0">
                    <Button variant="white-0 p-1 text-primary-3 fw-semibold" onClick={handleRemove({ id, main, image, title, categories, cal, emis, unit, pro, jumlah })}>
                      -
                    </Button>
                  </Col>
                  <Col
                    xs={4}
                    className="fw-bold fs-subtitle text-center m-auto"
                  >
                   {jumlah}
                  </Col>
                  <Col xs={4} className="fw-bold fs-subtitle p-0">
                    <Button variant="white-0 p-1 text-primary-3 fw-semibold float-end" onClick={handleAdd({ id, main, image, title, categories, cal, emis, unit, pro, jumlah })}>
                      +
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ) : (
        <Card className="border-white-100">
          <Row>
            <Col xs={{ order: "last" }}>
              <div className="p-3">
                <Card.Img
                  style={{ height: 200, objectFit: "cover" }}
                  className="rounded"
                  variant="top"
                  src={image}
                />
              </div>
            </Col>
            <Col>
              <Card.Body>
                <Card.Title className="text-active fw-bold fs-subtitle mb-1">
                  {title}
                </Card.Title>
                <Card.Text className="text-active fs-caption mb-1">
                  {categories}
                </Card.Text>
                <Card.Text className="text-active fs-subtitle fw-semibold my-2">
                  {jumlah} <span>{unit}</span>
                </Card.Text>
                <Card.Text className="text-disabled fs-caption mb-1">
                  Makanan <span>·</span> {pro}
                </Card.Text>
                <Row className="m-0 gx-2">
                  <Col
                    xs={5}
                    className="badge bg-secondary-1 text-active fw-normal me-2"
                  >
                    {cal} Kkal
                  </Col>
                  <Col
                    xs={5}
                    className="badge bg-secondary-1 text-active fw-normal"
                  >
                    {emis} CO2e
                  </Col>
                </Row>
                <Row className="m-0 mt-3 gx-2">
                  <Col xs={7} className="p-0">
                    <Row className="bg-white-100 p-1 rounded m-0">
                      <Col xs={4} className="fw-bold fs-subtitle p-0">
                        <Button variant="white-0 p-1 text-primary-3 fw-semibold" onClick={handleRemove({ id, main, image, title, categories, cal, emis, unit, pro, jumlah })}>
                          -
                        </Button>
                      </Col>
                      <Col
                        xs={4}
                        className="fw-bold fs-subtitle text-center m-auto"
                      >
                        {jumlah}
                      </Col>
                      <Col xs={4} className="fw-bold fs-subtitle p-0">
                        <Button variant="white-0 p-1 text-primary-3 fw-semibold float-end" onClick={handleAdd({ id, main, image, title, categories, cal, emis, unit, pro, jumlah })}>
                          +
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
}
