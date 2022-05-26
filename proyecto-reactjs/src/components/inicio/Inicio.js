import { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import { connect, Provider } from "react-redux";
import Estilos from '../inicio/Inicio.module.css'

import Spinner from "../../components/Spinner/Spinner";



import * as actionCreators from "../../store/actions/";

class Inicio extends Component
{
  state={
    isUserLoggedIn: this.props.isUserLoggedIn,
    userName:"",
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
            <input className={Estilos.elInput} 
            type='text' 
            value={this.state.userName}
            onChange={(event)=>{
              this.updateSingInInfo(event, "userName");
            }}>
              
            </input>
          </div>
          <div className={Estilos.contienePregunta}>
            <label>Contraseña:</label>
            <input className={Estilos.elInput} 
            type='password'
            value={this.state.password}
              onChange={(event)=>{
                this.updateSingInInfo(event, "password");
              }}
              >
              
            </input>
          </div>
          <div className={Estilos.divBotonInicio}>
              <Link to={'/menu'}>
                <button className={Estilos.botonInicio}>Iniciar Seasión</button>
                {this.renderSubmitButton()}
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

  renderSubmitButton = () => {
    let content = <button onClick={this.submitSignUpForm}>Submit</button>;

    if (this.props.loadingAuth) {
      content = <Spinner />;
    }

    return content;
  };

  updateSingInInfo = (event, type) =>{
    const updatedLoginInfo = {
      ...this.state,
    };

    updatedLoginInfo[type] = event.target.value;

    this.setState({
      userName: updatedLoginInfo.userName,
      password: updatedLoginInfo.password,
    });
  };
  submitSignUpForm = () => {
    const userData = {
      email: this.state.userName,
      password: this.state.password,
    };

    this.props.onUserSignUp(userData, () => {
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
    onUserSignUp: (authData, onSuccessCallback) =>
      dispatch(actionCreators.signUp(authData, onSuccessCallback)),
  };
};

 export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
