import React from "react";
import "../aboutUs/aboutUs.css";

function AboutUs(props) {
  return (
    <div className="sobre-mi">
      <img
        className="image-profail"
        src={require(`../../assets/images/${props.imagen}.png`)}
        alt="imagen de perfil"
      />
      <br />

      <p className="name">{props.nombre}</p>
      <br />
      <p className="description">{props.descripcion}</p>
    </div>
  );
}
export default AboutUs;
