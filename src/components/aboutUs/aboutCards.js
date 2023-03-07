import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "../aboutUs/aboutCards.css";

const Cardi = (props) => {
  let { imgA, nameA, biografiA } = props.data;
  return (
    <Card className="p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hidden rounded p-0 bg-light">
        <Card.Img variant="top" src={imgA} />
        <Card.Body className="text-center">
          <Card.Title>{nameA}</Card.Title>
          <Card.Text className="text-center">{biografiA}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};
export default Cardi;
