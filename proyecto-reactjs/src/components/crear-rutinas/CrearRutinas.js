import Estilos from '../crear-rutinas/CrearRutinas.module.css'
import { Component } from 'react';
import {Link} from 'react-router-dom'

class CrearRutinas extends Component
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
            <h2 className={Estilos.navegarActual}>Crear</h2>
          </div>
          <div className={Estilos.paginaSecundaria}>
            <Link to={'/rutinas'}>
              <h2 className={Estilos.navegarLetras}>Volver</h2>
            </Link>
          </div>
        </div>
        <div className={Estilos.contenedorContenido1}>
          <div className={Estilos.crearEjercicios}>
            <div className={Estilos.seccion}>
              <div className={Estilos.contienePregunta}>
                <label className={Estilos.pregunta}>Nombre del ejercicio:</label>
                <input className={Estilos.campo} type="text"></input>
              </div>
              <div className={Estilos.contienePregunta}>
                <label className={Estilos.pregunta}>Core que trabaja:</label>
                <input className={Estilos.campo} type="text"></input>
              </div>
            </div>
            <div className={Estilos.seccion}>
              <div className={Estilos.contienePregunta}>
                <label className={Estilos.pregunta}>Repeticiones:</label>
                <input className={Estilos.campo} type="numbrer"></input>
              </div>
              <div className={Estilos.contienePregunta}>
                <label className={Estilos.pregunta}>Series:</label>
                <input className={Estilos.campo} type="number"></input>
              </div>
            </div>
            <div className={Estilos.seccion}>
              <div className={Estilos.contienePregunta}>
                <label className={Estilos.pregunta}>Materiales:</label>
                <input className={Estilos.campo} type="text"></input>
              </div>
              <div className={Estilos.contienePregunta}>
                <label className={Estilos.pregunta}>Dificulta:</label>
                <input className={Estilos.campo} type="text"></input>
              </div>
            </div>
            <div className={Estilos.seccion}>
              <div className={Estilos.contienePregunta}>
                <label className={Estilos.pregunta}>Dificultad:</label>
                <input className={Estilos.campo} type="file"></input>
              </div>
            </div>
            <div className={Estilos.seccion}>
              <div className={Estilos.contienePregunta}>
                <button className={Estilos.elBoton}>Guardar Ejercicio</button>
              </div>
            </div>
          </div>
          <div className={Estilos.ejercicios}>
            <div className={Estilos.ejer}>
              <h1 className={Estilos.h1eje}>Ejercicio</h1>
            </div>
            <div className={Estilos.ejer}>
              <h1 className={Estilos.h1eje}>Ejercicio</h1>
            </div>
            <div className={Estilos.ejer}>
              <h1 className={Estilos.h1eje}>Ejercicio</h1>
            </div>
            <div className={Estilos.ejer}>
              <h1 className={Estilos.h1eje}>Ejercicio</h1>
            </div>
            <div className={Estilos.ejer}>
              <h1 className={Estilos.h1eje}>Ejercicio</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 export default CrearRutinas;
