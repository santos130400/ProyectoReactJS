import Estilos from '../registro/Registro.module.css'
import { Component } from 'react';
import {Link} from 'react-router-dom'

class Registro extends Component
{
  render()
  {
    return(
      <div className={Estilos.contenedor}>
        <div>
          <h1 className={Estilos.titulos}>REGISTRO</h1>
        </div>
        <div className={Estilos.contieneDatos}>
         <div className={Estilos.seccion}>
          <div className={Estilos.contienePregunta}>
            <label className={Estilos.pregunta}>Nombres:</label>
            <input className={Estilos.campo} type="text"></input>
          </div>
          <div className={Estilos.contienePregunta}>
            <label className={Estilos.pregunta}>Apellidos:</label>
            <input className={Estilos.campo} type="text"></input>
          </div>
         </div>
          <div className={Estilos.seccion}>
            <div className={Estilos.contienePregunta}>
              <label className={Estilos.pregunta}>Correo:</label>
              <input className={Estilos.campo} type="email"></input>
            </div>
            <div className={Estilos.contienePregunta}>
              <label className={Estilos.pregunta}>Celular:</label>
              <input className={Estilos.campo} type="tel"></input>
            </div>
          </div> 
          <div className={Estilos.contienePreguntaRadio}>
            <label className={Estilos.pregunta}>Genero:</label>
            <input className={Estilos.campo} type="radio" name='genero' value="Masculino"></input> Masculino
            <input className={Estilos.campo} type="radio" name='genero' value="Femenino"></input> Femenino
          </div> 
          <div className={Estilos.seccion}>
            <div className={Estilos.contienePregunta}>
              <label className={Estilos.pregunta}>Estatura(cm):</label>
              <input className={Estilos.campo} type="number"></input>
            </div>
            <div className={Estilos.contienePregunta}>
              <label className={Estilos.pregunta}>Peso(Kg):</label>
              <input className={Estilos.campo} type="number"></input>
            </div>
          </div>        
          <div className={Estilos.seccion}>
            <div className={Estilos.contienePregunta}>
              <label className={Estilos.pregunta}>Contraseña:</label>
              <input className={Estilos.campo} type="password"></input>
            </div>
            <div className={Estilos.contienePregunta}>
              <label className={Estilos.pregunta}>Confirmar contraseña:</label>
              <input className={Estilos.campo} type="password"></input>
            </div>
          </div> 
         <div className={Estilos.contieneTerminos}>
         <label>He leído y acepto los términos y condiciones de uso</label>
         <input type='checkbox'></input>
         </div>
         <div className={Estilos.divBotonInicio}>
          <Link to={'/inicio'}>
            <button className={Estilos.botonInicio}>REGISTRARME</button>
          </Link>
         </div>
       </div>
      </div>
    )
  }
}
 export default Registro;
