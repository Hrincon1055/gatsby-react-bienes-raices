import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadPreview from "../components/propiedadPreview"
import * as listadoPropiedades from "../css/listadoPropiedades.module.css"
import useFiltro from "../hooks/useFiltro"
// Inicio
export default function ListadoPropiedades() {
  // constantes
  const resultado = usePropiedades()

  // state
  const [propiedades] = useState(resultado)
  const [filtradas, setFiltradas] = useState([])

  // filtrado de propiedades
  const { categoria, FiltroUI } = useFiltro()
  // effect
  useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(
        propiedad => propiedad.categoria.nombre === categoria
      )
      setFiltradas(filtro)
    } else {
      setFiltradas(propiedades)
    }
  }, [categoria, propiedades])
  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras propiedades
      </h2>
      {FiltroUI()}
      <ul className={listadoPropiedades.propiedades}>
        {filtradas.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}
