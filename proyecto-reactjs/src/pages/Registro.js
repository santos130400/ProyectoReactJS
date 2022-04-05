import '../styles/Registro.css';
import { Component } from 'react';
import {Link} from 'react-router-dom'

class Registro extends Component
{
  render()
  {
    return(
      <div className='contenedor'>
        <LetraMenuTitulo titulo="REGISTRO"/>
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
        <h1 className='titulos'>{this.props.titulo}</h1>
      </div>
    )
  }
}
 class CajaInicio extends Component
 {
   render()
   {
     return(
       <div className='contieneDatos'>
         <div className='seccion'>
            <SeccionPreguntaInicio pregunta="Nombres:" tipo="text"/>
            <SeccionPreguntaInicio pregunta="Apellidos:" tipo="text"/>
         </div>
          <div className='seccion'>
            <SeccionPreguntaInicio pregunta="Correo:" tipo="email"/>
            <SeccionPreguntaInicio pregunta="Telefono:" tipo="tel"/>
          </div> 
          <div className='contienePreguntaRadio'>
            <label className='pregunta'>Genero:</label>
            <input className='campo' type="radio" name='genero' value="Masculino"></input> Masculino
            <input className='campo' type="radio" name='genero' value="Femenino"></input> Femenino
          </div> 
          <div className='seccion'>
            <SeccionPreguntaInicio pregunta="Estatura(cm):" tipo="Estatura"/>
            <SeccionPreguntaInicio pregunta="Peso(Kg):" tipo="Peso"/>
          </div>        
          <div className='seccion'>
            <SeccionPreguntaInicio pregunta="Contraseña:" tipo="password"/>
            <SeccionPreguntaInicio pregunta="Confirmar contraseña:" tipo="password"/>
          </div> 
         <div className='contieneTerminos'>
         <label>He leído y acepto los términos y condiciones de uso</label>
         <input type='checkbox'></input>
         </div>
         <BotonInicio contenido="Resgistrarme"/>
       </div>
     )
   }
 }
 class SeccionPreguntaInicio extends Component
 {
   render()
   {
     return(
       <div className='contienePregunta'>
          <label className='pregunta'>{this.props.pregunta}</label>
          <input className='campo' type={this.props.tipo}></input>
       </div>
     )
   }
 }

 class BotonInicio extends Component
 {
   render()
   {
     return(
       <div className='divBotonInicio'>
          <Link to={'/inicio'}>
            <button className='botonInicio'>{this.props.contenido}</button>
          </Link>
          
       </div>
     )
   }
 }
 export default Registro;
