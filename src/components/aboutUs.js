import React from "react";
import "./aboutUs.css";

function AboutUs(props) {
  return (
    <div className="sobre-mi">
      <img
        className="image-profail"
        src={`../images/${props.imagen}.jpg`}
        alt="imagen de perfil"
      />
      <div className="contain-text">
        <p className="name">{props.nombre}</p>
        <p className="description">{props.descripcion}</p>
      </div>
    </div>
  );
}
export default AboutUs;
