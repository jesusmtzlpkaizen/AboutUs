import React from "react";
import "../aboutUs/biografias.css";

import AboutUs from "../aboutUs/aboutUs";
import { Grid, Box } from "@mui/material";

function Biografia() {
  return (
    <div className="mi-biografia">
      <Grid container>
        <Grid item xs={12}>
          <Box>
            <h1>W&M</h1>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <h2>Sobre nosotros</h2>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <p>
              Somos un equipo enfocado en la comodidad para los jóvenes sin
              descuidar el aspecto casual y formal, ofrececiendo productos de
              calidad a precios accesibles, estamos comprometidos con el
              cliente, el ámbito social y el medio ambiente.
            </p>
          </Box>
        </Grid>
        <Grid container className="Lo">
          <Grid item xs={12} lg={2.4}>
            <AboutUs
              imagen="circle"
              nombre="Hector:"
              descripcion="Ingeniero en aeronáutica proactivo con habilidades de liderazgo, toma de decisiones y orientación al detalle. Actualmente miembro del equipo CodeHunters en Generation México para el desarrollo de una aplicación web como desarrollador Full Stack."
            />
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <AboutUs
              imagen="circle"
              nombre="Jesus Martinez"
              descripcion="Estoy enfocado en el aprendizaje y mejoramiento continuo para crecer y permitir el crecimiento de las personas a mi alrededor. Miembro del equipo de desarrollo CodeHunters en Generation México encargados del desarrollo de una aplicación web de comercio electrónico."
            />
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <AboutUs
              imagen="circle"
              nombre="Carlos Zarate"
              descripcion="Soy Ingeniero en sistemas, tengo 28 años y actualmente 
        soy miembro del equipo CodeHunters para el desarrollo 
        de una aplicacion web FullStack."
            />
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <AboutUs
              imagen="circle"
              nombre="Estefania"
              descripcion="monreededdwdwed"
            />
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <AboutUs
              imagen="circle"
              nombre="Gerardo"
              descripcion="monreededdwdwed"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Biografia;
