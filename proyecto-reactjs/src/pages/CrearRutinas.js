import '../styles/CrearRutinas.css';
import { Component } from 'react';

class CrearRutinas extends Component
{
  render()
  {
    return(
      <div className='contenedorMenu'>
          <DivNavegacion nombre="ARNOLD RIOS"/>
          <ControlesNavegacion/>
          <CrearRutina/>
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
          <ControlesActual actual="Rutinas"/>
          <ControlesSecundaria secundaria="Menu"/>
          <ControlesTerciaria terciaria="Programar"/>
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

class CrearRutina extends Component
{
    render()
    {
        return(
          <div className='contieneCrear'>
        <div className='contenedorTitulo'>
          <h1> Crear Rutina</h1>
        </div>
        <div className='contenedorContenido'>
          <Izquierda/>
          <Derecha/>
        </div>
      </div>
        )
    }
}

class Izquierda extends Component
{
    render()
    {
        return(
            <><div className='contenedorIzquierda'>
                <div className='datos'>
                    <NombreDatoInicio nombre="Nombre:" tipo="text" />
                    <NombreDatoInicio nombre="Zona Core:" tipo="text" />
                </div>
                <div className='rutinas'>
            <div className='boxes'>
                    <Box nombre="Ejercicio" tipo="image" />
                </div>
                
                </div>
            </div>
            </>
        )
    }
}
class NombreDatoInicio extends Component{
    render()
    {
        return(
            <div className='contieneDato'>
                <label className='nombre'>{this.props.nombre}</label>
            </div>
        )
    }
}
class Box extends Component{
    render()
    {
        return(
            <div className='contieneBox'>
                <label className='nombre'>{this.props.nombre}</label>
            </div>
        )
    }
}
class Derecha extends Component{
    render()
    {
        return(
            <div className='contenedorDerecha'>
                <div className='otros'>
                    <DatoFinal final="Nombre:" tipo="text"/>
                    <DatoFinal final="Zona Core:" tipo="text"/>
                    <DatoFinal final="Equipamiento:" tipo="text"/>
                    
                </div>
            </div>
        )
    }
}    
class DatoFinal extends Component{
        render()
        {
            return(
                <div className='contieneOtros'>
                    <label className='final'>{this.props.final}</label>
                </div>
            )
        }    
}

 export default CrearRutinas;
