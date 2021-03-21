import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import * as heroCSS from "../css/hero.module.css"

const ImagenBackground = styled(BackgroundImage)`
  height: 300px;
`

// Inicio
export default function Encuentra() {
  const { imagen } = useStaticQuery(graphql`
    query {
      imagen: file(relativePath: { eq: "encuentra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ImagenBackground tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
      <div className={heroCSS.imagenbg}>
        <h3 className={heroCSS.titulo}>Encuentra la casa de tus sueños</h3>
        <p>15 años de experiencia</p>
      </div>
    </ImagenBackground>
  )
}
