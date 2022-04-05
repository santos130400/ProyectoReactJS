import '../styles/Rutinas.css';
import { Component } from 'react';
import {Link} from 'react-router-dom'

class Rutinas extends Component
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
        <Link to={'/inicio'}>
          <NavegacionCiudadPais lugar="Bogotá/Colombia"/>
          </Link>
          <div className='contenedorNombreYDatos'>
            <h1 className='nombre'>{this.props.nombre}</h1>
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
          <Link to={'/menu'}>
            <ControlesSecundaria secundaria="Menu"/>
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
      <div className='contenedorContenido3'>
        <ContenidoRutinas/>
      </div>
    )
  }
}
class ContenidoRutinas extends Component {
  render(){
    return (
     <div className='contengoTodo'>
        <SearchBar/>
        <LasRutinas/>
        <Actualizado/>
        <Columnas/>
     </div>
  )}
  
  }
  
  
  
  class SearchBar extends Component
  {
    render()
    {
      return(
        <div className='searchBar'>
            <div className="navy georgia ma0 grow">
            <img className='lupa' src='https://cdn-icons-png.flaticon.com/128/64/64673.png' alt='lupa'></img>
            </div>
            <div className="buscar">
                <input 
                className="buscar"
                type = "search" 
                placeholder = "Buscar Rutina" 
                />
            </div>           
        </div>
      )
    }
  }

  class Actualizado extends Component
  {
    render()
    {
      return(
          <div className='titulos1'>
          <h2>Mis rutinas</h2>
          <h2>Rutinas guardadas</h2>
          </div>
      )
    }
  }

  class LasRutinas extends Component
  {
    render()
    {
      return(
        <div className='rutinas1'>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
          <h1>Rutinas</h1>
        </div>
      )
    }
  }
  class Columnas extends Component
  {
    render()
    {
      return(
          <div className='titulos1'>
              <div className='c1'>
                <Link to={'crear-rutina'}>
                <button>crear rutina</button>
                </Link>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
              </div>

              <div className='c2'>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
                <h1>Rutinas</h1>
              </div>
          </div>
      )
    }
  }

  function Card({person}) {
    return(
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img className="br-100 h3 w3 dib" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
        <div>
          <h2>{person.name}</h2>
          <p>{person.email}</p>
        </div>
      </div>
    );
  }

  function SearchList({ filteredPersons }) {
    const filtered = filteredPersons.map(person =>  <Card key={person.id} person={person} />); 
    return (
      <div>
        {filtered}
      </div>
    );
  }

 export default Rutinas;
