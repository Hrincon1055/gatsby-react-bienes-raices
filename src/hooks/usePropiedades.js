import { graphql, useStaticQuery } from "gatsby"

const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          descripcion
          id
          wc
          precio
          estacionamiento
          habitaciones
          categoria {
            nombre
          }
          agente {
            nombre
            telefono
            email
          }
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 500, maxHeight: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return datos.allStrapiPropiedades.nodes.map(propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion,
    imagen: propiedad.imagen,
    id: propiedad.id,
    wc: propiedad.wc,
    estacionamiento: propiedad.estacionamiento,
    habitaciones: propiedad.habitaciones,
    agentes: propiedad.agente,
    precio: propiedad.precio,
    categoria: propiedad.categoria,
  }))
}
export default usePropiedades
