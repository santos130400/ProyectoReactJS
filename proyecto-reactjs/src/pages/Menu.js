import '../styles/Menu.css';
import { Component } from 'react';
import {Link} from 'react-router-dom'

class Menu extends Component
{
  render()
  {
    return(
      <div className='contenedorMenu'>
          <DivNavegacion nombre="ARNOLD RIOS"/>
          <ControlesNavegacion/>
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
      <div className='contenedorNavegacion'>
          <NavegacionCiudadPais lugar="Bogotá/Colombia"/>
          <div className='contenedorNombreYDatos'>
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
      <div className='contenedorCiudadPais'>
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
      <div className='contenedorDatosNavegacion'>
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
      <div className='datosNavegacionDivEstatura'>
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
      <div className='datosNavegacionDivPeso'>
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
      <div className='datosNavegacionDivGenero'>
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
      <div className='botonesNavegacion'>
          <ControlesActual actual="Menu"/>
          <Link to={'/rutinas'}>
          <ControlesSecundaria secundaria="Rutinas"/>
          </Link>
          <Link to={'/programar'}>
          <ControlesTerciaria terciaria="Programar"/>
          </Link>
      </div>
    )
  }
}
class ControlesActual extends Component
{
  render()
  {
    return(
      <div className='paginaActual'>
          <h2 className='navegarActual'>{this.props.actual}</h2>
      </div>
    )
  }
}
class ControlesSecundaria extends Component
{
  render()
  {
    return(
      <div className='paginaSecundaria'>
          <h2 className='navegarLetras'>{this.props.secundaria}</h2>
      </div>
    )
  }
}
class ControlesTerciaria extends Component
{
  render()
  {
    return(
      <div className='paginaTerciaria'>
          <h2 className='navegarLetras'>{this.props.terciaria}</h2>
      </div>
    )
  }
}
class DivContenido extends Component
{
  render()
  {
    return(
      <div className='contenedorContenido1'>
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
      <div className='contenedorNoticias1'>
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
      <div className='contenedorRecetas1'>
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
      <div className='noticia'>
      </div>
    )
  }
}
class Receta extends Component
{
  render()
  {
    return(
      <div className='receta'>

      </div>
    )
  }
}

 export default Menu;
