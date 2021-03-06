import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
// import {getFood, postFood} from "../../redux/action/action.food"
import { addFood, deleteFood } from "../../redux/action/action.calculate";
import { useDispatch, useSelector } from "react-redux";

// Pro props need to be fixed soon
export default function Cards({
  id,
  main,
  image,
  title,
  categories,
  cal,
  emis,
  unit,
  pro,
  jumlah,
}) {
  const data = {
    id: id,
    image: image,
    title: title,
    categories: categories,
    cal: parseInt(cal),
    emis: parseFloat(emis).toFixed(2),
    unit: unit,
    pro: parseInt(pro),
    jumlah: parseInt(jumlah),
  };
  const kalkulasi = useSelector(
    (currentState) => currentState.handleCalculateReducers
  );
  const find_food = kalkulasi.find((e) => e.id === id);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addFood(data));
  };
  const handleRemove = () => {
    dispatch(deleteFood(data));
  };

  return (
    <>
      {main ? (
        <Card className="border-white-100" key={id}>
          <div className="pt-3 ps-3 pe-3">
            <Card.Img
              style={{ height: 160, objectFit: "cover" }}
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
            <div className="m-0 gx-2">
              <div className="badge bg-primary-2 text-white fw-normal me-1">
                {cal} Kkal
              </div>
              <div className="badge bg-secondary-1 text-active fw-normal">
                {emis} CO2e
              </div>
            </div>
            <Row className="m-0 mt-3 gx-2">
              <Col xs={10} sm={7} className="p-0">
                <Row className="bg-white-100 p-1 rounded m-0">
                  <Col xs={4} className="fw-bold fs-subtitle p-0">
                    <Button
                      variant="white-0 p-1 text-primary-3 fw-semibold"
                      onClick={handleRemove}
                    >
                      -
                    </Button>
                  </Col>
                  <Col
                    xs={4}
                    className="fw-bold fs-subtitle text-center m-auto"
                  >
                    {find_food ? find_food.jumlah : 0}
                  </Col>
                  <Col xs={4} className="fw-bold fs-subtitle p-0">
                    <Button
                      variant="white-0 p-1 text-primary-3 fw-semibold float-end"
                      onClick={handleAdd}
                    >
                      +
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ) : (
        <Card className="border-white-100" key={id}>
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
                  Makanan <span>??</span> {pro}
                </Card.Text>
                <div className="m-0 gx-2">
                  <div className="badge bg-primary-2 text-white fw-normal me-1">
                    {cal} Kkal
                  </div>
                  <div className="badge bg-secondary-1 text-active fw-normal">
                    {emis} CO2e
                  </div>
                </div>
                <Row className="m-0 mt-3 gx-2">
                  <Col xs={10} sm={7} className="p-0">
                    <Row className="bg-white-100 p-1 rounded m-0">
                      <Col xs={4} className="fw-bold fs-subtitle p-0">
                        <Button
                          variant="white-0 p-1 text-primary-3 fw-semibold"
                          onClick={handleRemove}
                        >
                          -
                        </Button>
                      </Col>
                      <Col
                        xs={4}
                        className="fw-bold fs-subtitle text-center m-auto"
                      >
                        {find_food ? find_food.jumlah : 0}
                      </Col>
                      <Col xs={4} className="fw-bold fs-subtitle p-0">
                        <Button
                          variant="white-0 p-1 text-primary-3 fw-semibold float-end"
                          onClick={handleAdd}
                        >
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
