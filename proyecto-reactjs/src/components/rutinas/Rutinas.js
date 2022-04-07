import Estilos from '../rutinas/Rutinas.module.css'
import { Component } from 'react';
import {Link} from 'react-router-dom'

class Rutinas extends Component
{
  render()
  {
    return(
      <div className='contenedorMenu'>
        <div className={Estilos.contenedorNavegacion}>
          <div className={Estilos.contenedorCiudadPais}>
            <h3>{this.props.lugar}</h3>
          </div>
          <div className={Estilos.contenedorNombreYDatos}>
            <h1>{this.props.nombre}</h1>
            <div className={Estilos.contenedorDatosNavegacion}>
              <div className={Estilos.datosNavegacionDivEstatura}>
                <h2>{this.props.estatura}</h2>
              </div>
              <div className={Estilos.datosNavegacionDivPeso}>
                <h2>{this.props.peso}</h2>
              </div>
              <div className={Estilos.datosNavegacionDivGenero}>
                <h2>{this.props.genero}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={Estilos.botonesNavegacion}>
          <div className={Estilos.paginaActual}>
            <h2 className={Estilos.navegarActual}>Rutinas</h2>
          </div>
          <div className={Estilos.paginaSecundaria}>
            <Link to={'/menu'}>
              <h2 className={Estilos.navegarLetras}>Menu</h2>
            </Link>
          </div>
          <div className={Estilos.paginaTerciaria}>
            <Link to={'/programar'}>
              <h2 className={Estilos.navegarLetras}>Programar</h2>
            </Link>
          </div>
        </div>
          <DivContenido/>
      </div>
    )
  }
}
class DivContenido extends Component
{
  render()
  {
    return(
      <div className={Estilos.contenedorContenido3}>
        <div className={Estilos.contengoTodo}>
          <div className={Estilos.searchBar}>
              <div className="navy georgia ma0 grow">
              <img className={Estilos.lupa} src='https://cdn-icons-png.flaticon.com/128/64/64673.png' alt='lupa'></img>
              </div>
              <div className={Estilos.buscar}>
                  <input 
                  className={Estilos.buscar}
                  type = "search" 
                  placeholder = "Buscar Rutina" 
                  />
              </div>           
          </div>
          <div className={Estilos.rutinas1}>
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
          <div className={Estilos.titulos1}>
            <div className={Estilos.contieneTitulos}>
              <h2 className={Estilos.h2Titulos}>Mis rutinas</h2>
            </div>
            <div className={Estilos.contieneTitulos}>
              <h2 className={Estilos.h2Titulos}>Rutinas guardadas</h2>
            </div>
          </div>
          <div className={Estilos.titulos2}>
            <div className={Estilos.c1}>
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
            <div className={Estilos.c2}>
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
