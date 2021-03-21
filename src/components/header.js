import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navegacion from "./navegacion"
import { css } from "@emotion/react"

// Inicio
export default function Header() {
  // consultar el logo
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  // return
  return (
    <header
      css={css`
        background-color: #0d283b;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Link to={"/"}>
          {" "}
          <img src={logo.publicURL} alt="Logo Bienes Raices" />
        </Link>
        <Navegacion />
      </div>
    </header>
  )
}
