import '../styles/Programar.css';
import { Component } from 'react';
import {Link} from 'react-router-dom'

class Programar extends Component
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
          <ControlesActual actual="Programar"/>
          <Link to={'/rutinas'}>
          <ControlesSecundaria secundaria="Rutinas"/>
          </Link>
          <Link to={'/menu'}>
          <ControlesTerciaria terciaria="Menu"/>
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
      <div className='contenedorContenido2'>
          <Clima/>
      </div>
    )
  }
}
class Clima extends Component {
  render(){
    return (
     <div className="container-fluid p-0 m-0 row justify-content-center gray-light">
      <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 p-5 light">
        
        <Description/>
        <Fotos/>
        <Actualizado/>
      </div>
     </div>
  )}
  
  }
  
  
  
  class Description extends Component
  {
    render()
    {
      return(
        <p>Aquí podras saber como se va a comportar el clima el dia de hoy, a la hora que 
          tengas programado tus entrnamientos en exteriores.
        </p>
      )
    }
  }

  class Actualizado extends Component
  {
    render()
    {
      return(
        <p>Actualizado hace 1 hora</p>
      )
    }
  }
  class Fotos extends Component
  {
    render()
    {
      return(
        <div className='imageContainer'>
          <img className='clima' src="https://s1.eestatic.com/2020/04/10/elandroidelibre/el_androide_libre_481464119_180501083_1280x853.jpg" alt='clima'></img>
          <img className='clima' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsaGRZ9YFCFRTUTuIrXCsnFD6cexng--itA&usqp=CAU" alt='clima'></img>  
        </div>
      )
    }
  }

 export default Programar;
