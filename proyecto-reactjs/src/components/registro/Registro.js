import Estilos from '../registro/Registro.module.css'
import { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";

import Spinner from "../../components/Spinner/Spinner";

import * as actionCreators from "../../store/actions/";

class Registro extends Component
{

  state={
    userName:"",
    apellido:"",
    correo:"",
    celular:"",
    genero:"",
    Estatura:"",
    peso:"",
    password:"",
  }
  componentDidUpdate() {
    if (this.state.isUserLoggedIn) {
      this.props.history.replace("/");
    }
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      isUserLoggedIn: nextState.isUserLoggedIn,
    });
  }
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
            <input className={Estilos.campo} 
            type="text" 
            value={this.state.userName}
            onChange={(event)=>{
              this.updateLogInfo(event, "userName")
            }} >
           
            </input>
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
              <input className={Estilos.campo} 
              type="password"
              value={this.state.password}
              onChange={(event)=>{
                this.updateLogInfo(event, "password");
              }}>
                
              </input>
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
          <Link to={'/'}>
            <button onClick={this.submitLoginForm} className={Estilos.botonInicio}>REGISTRARME</button>
            {this.renderSubmitButton}
          </Link>
         </div>
       </div>
      </div>
    )
  }

  renderSubmitButton = () => {
    let content = <button onClick={this.submitLoginForm}>Submit</button>;

    if (this.props.loadingAuth) {
      content = <Spinner />;
    }

    return content;
  };

  updateLogInfo = (event, type)=>{
    const updatedLoginInfo={
      ...this.state,
    };
    updatedLoginInfo[type] = event.target.value;

    this.setState({
      userName: updatedLoginInfo.userName,
      password: updatedLoginInfo.password,
    });
  };
  submitLoginForm = () =>{
    const userData = {
      email: this.state.userName,
      password: this.state.password,
    };

    this.props.onUserLogin(userData, () => {
      this.props.history.push("/");
    });
  };
}
const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
    loadingAuth: state.authenticationStore.loadingAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUserLogin: (authData, onSuccessCallback) =>
      dispatch(actionCreators.logIn(authData, onSuccessCallback)),
  };
};

 export default connect(mapStateToProps, mapDispatchToProps)(Registro);
