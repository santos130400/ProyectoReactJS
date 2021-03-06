import { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Estilos from '../inicio/Inicio.module.css'

class Inicio extends Component
{
  render()
  {
    function existe(props) {
      const usuario = props.usuario;
      const contra = props.contra;
      if (usuario.equals("1") && contra.equals("1")) {
        return <Link to={'/menu'}>
                <button className={Estilos.botonInicio}>Iniciar Seasión</button>
              </Link>;
      }
      return console.log("no registrado");
    };
    return(
      <div className={Estilos.contenedor}>
        <div>
          <h1 className={Estilos.titulos}>{this.props.titulo}</h1>
        </div>
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
              </Link>;
          </div>
          <div className={Estilos.preguntasInicio}>
            <h3 className={Estilos.laLetra}>¿Olvido su contraseña?</h3>
            <Link to={'/registro'}>
              <h3 className={Estilos.laLetra}>Si no tienes cuenta crea una ya</h3>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
 export default Inicio;
