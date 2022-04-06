import { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Estilos from '../inicio/Inicio.module.css'

class Inicio extends Component
{
  render()
  {
    return(
      <div className={Estilos.contenedor}>
        <LetraMenuTitulo titulo="MY FITNESS"/>
        <CajaInicio/>
      </div>
    )
  }
}

class LetraMenuTitulo extends Component
{
  render()
  {
    return(
      <div>
        <h1 className={Estilos.titulos}>{this.props.titulo}</h1>
      </div>
    )
  }
}
 class CajaInicio extends Component
 {
   render()
   {
     return(
      <div className={Estilos.contieneDatosInicio}>
        <div className={Estilos.contienePregunta}>
          <label>Usuario:</label>
          <input className={Estilos.elInput} type='text'></input>
        </div>
        <div className={Estilos.contienePregunta}>
          <label>Contraseña:</label>
          <input className={Estilos.elInput} type='password'></input>
       </div>
        <div className={Estilos.divBotonInicio}>
          <Link to={'/menu'}>
            <button className={Estilos.botonInicio}>Iniciar Seasión</button>
          </Link>
        </div>
        <div className={Estilos.preguntasInicio}>
          <h3 className={Estilos.laLetra}>¿Olvido su contraseña?</h3>
          <Link to={'/registro'}>
            <h3 className={Estilos.laLetra}>Si no tienes cuenta crea una ya</h3>
          </Link>
        </div>
      </div>
     )
   }
 }
 export default Inicio;
