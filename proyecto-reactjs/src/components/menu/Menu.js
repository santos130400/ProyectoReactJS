import Estilos from '../menu/Menu.module.css'
import { Component } from 'react';
import {Link} from 'react-router-dom'

class Menu extends Component
{
  render()
  {
    return(
      <div className={Estilos.contenedorMenu}>
          <DivNavegacion nombre="ARNOLD RIOS"/>
          <DivContenido/>
      </div>
    )
  }
}
class DivNavegacion extends Component
{
  render()
  {
    return(
      <div className={Estilos.contenedorNavegacion}>
          <NavegacionCiudadPais lugar="Bogotá/Colombia"/>
          <div className={Estilos.contenedorNombreYDatos}>
            <h1>{this.props.nombre}</h1>
            <ContenedorDatosNavegacion/>
          </div>
      </div>
    )
  }
}
class NavegacionCiudadPais extends Component
{
  render()
  {
    return(
      <div className={Estilos.contenedorCiudadPais}>
          <h3>{this.props.lugar}</h3>
      </div>
    )
  }
}
class ContenedorDatosNavegacion extends Component
{
  render()
  {
    return(
      <div className={Estilos.contenedorDatosNavegacion}>
          <DatosNavegacionDivEstatura estatura="178 cm"/>
          <DatosNavegacionDivPeso peso="68 Kg"/>
          <DatosNavegacionDivGenero genero="M"/>
      </div>
    )
  }
}
class DatosNavegacionDivEstatura extends Component
{
  render()
  {
    return(
      <div className={Estilos.datosNavegacionDivEstatura}>
          <h2>{this.props.estatura}</h2>
      </div>
    )
  }
}
class DatosNavegacionDivPeso extends Component
{
  render()
  {
    return(
      <div className={Estilos.datosNavegacionDivPeso}>
          <h2>{this.props.peso}</h2>
      </div>
    )
  }
}
class DatosNavegacionDivGenero extends Component
{
  render()
  {
    return(
      <div className={Estilos.datosNavegacionDivGenero}>
          <h2>{this.props.genero}</h2>
      </div>
    )
  }
}

class ControlesNavegacion extends Component
{
  render()
  {
    return(
      <div className={Estilos.botonesNavegacion}>
          <div className={Estilos.paginaActual}>
            <h2 className={Estilos.navegarActual}>Menu</h2>
          </div>
          <div className={Estilos.paginaSecundaria}>
            <Link to={'/rutinas'}>
              <h2 className={Estilos.navegarLetras}>Rutinas</h2>
            </Link>
          </div>
          <div className={Estilos.paginaTerciaria}>
            <Link to={'/programar'}>
              <h2 className={Estilos.navegarLetras}>Programar</h2>
            </Link>
          </div>
      </div>
    )
  }
}
class DivContenido extends Component
{
  render()
  {
    return(
      <div className={Estilos.contenedorContenido1}>
          <DivNoticias/>
          <DivRecetas/>
      </div>
    )
  }
}
class DivNoticias extends Component
{
  render()
  {
    return(
      <div className={Estilos.contenedorNoticias1}>
          <h2>NOTICIAS</h2>
          <Noticia/>
          <Noticia/>
          <Noticia/>
          <Noticia/>
      </div>
    )
  }
}
class DivRecetas extends Component
{
  render()
  {
    return(
      <div className={Estilos.contenedorRecetas1}>
          <h2>RECETAS</h2>
          <Receta/>
          <Receta/>
          <Receta/>
          <Receta/>
      </div>
    )
  }
}
class Noticia extends Component
{
  render()
  {
    return(
      <div className={Estilos.noticia}>
      </div>
    )
  }
}
class Receta extends Component
{
  render()
  {
    return(
      <div className={Estilos.receta}>

      </div>
    )
  }
}

 export default Menu;
