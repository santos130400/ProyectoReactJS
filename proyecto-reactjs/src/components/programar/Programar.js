import Estilos from '../programar/Programar.module.css';
import { Component } from 'react';
import {Link} from 'react-router-dom'
import React from 'react';
import Clima from '../clima/Clima';


class Programar extends Component
{
  render()
  {
    return(
      <div className={Estilos.contenedorMenu}>
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
            <h2 className={Estilos.navegarActual}>Programar</h2>
          </div>
          <div className={Estilos.paginaSecundaria}>
            <Link to={'/rutinas'}>
              <h2 className={Estilos.navegarLetras}>Rutinas</h2>
            </Link>
          </div>
          <div className={Estilos.paginaTerciaria}>
            <Link to={'/menu'}>
              <h2 className={Estilos.navegarLetras}>Menu</h2>
            </Link>
          </div>
        </div>
        <div className={Estilos.contenedorContenido2}>
          <Clima></Clima>
        </div>
      </div>
    )
  }
}
 export default Programar;
