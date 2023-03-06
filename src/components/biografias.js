import React from "react";

import AboutUs from "../components/aboutUs";
import { Grid, Box } from "@mui/material";

function Biografia() {
  return (
    <div className="mi-biografia">
      <Grid container>
        <Grid item xs={12}>
          <Box border={1}>
            <h1>W&M</h1>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box border={1}>
            <h2>Sobre nosotros</h2>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box border={1}>
            <p>
              Somos un equipo enfocado en la comodidad para los jóvenes sin
              descuidar el aspecto casual y formal, ofrececiendo productos de
              calidad a precios accesibles, estamos comprometidos con el
              cliente, el ámbito social y el medio ambiente.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box border={1}>
            <AboutUs
              imagen="circle"
              nombre="Hector:"
              descripcion="Ingeniero en aeronáutica proactivo con habilidades de liderazgo, toma de decisiones y orientación al detalle. Actualmente miembro del equipo CodeHunters en Generation México para el desarrollo de una aplicación web como desarrollador Full Stack."
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box border={1}>
            <AboutUs
              imagen="circle"
              nombre="Jesus Martinez"
              descripcion="Estoy enfocado en el aprendizaje y mejoramiento continuo para crecer y permitir el crecimiento de las personas a mi alrededor. Miembro del equipo de desarrollo CodeHunters en Generation México encargados del desarrollo de una aplicación web de comercio electrónico."
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box border={1}>
            <AboutUs
              imagen="circle"
              nombre="Carlos Zarate"
              descripcion="Soy Ingeniero en sistemas, tengo 28 años y actualmente 
        soy miembro del equipo CodeHunters para el desarrollo 
        de una aplicacion web FullStack."
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box border={1}>
            <AboutUs
              imagen="circle"
              nombre="Estefania"
              descripcion="monreededdwdwed"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box border={1}>
            <AboutUs
              imagen="circle"
              nombre="Gerardo"
              descripcion="monreededdwdwed"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Biografia;
