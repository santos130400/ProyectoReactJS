import '../styles/Inicio.css';
import { Component } from 'react';

class Inicio extends Component
{
  render()
  {
    return(
      <div className='contenedor'>
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
       <div className='contieneDatosInicio'>
         <SeccionPreguntaInicio pregunta="Usuario:" tipo="text"/>
         <SeccionPreguntaInicio pregunta="Contraseña:" tipo="password"/>
         <BotonInicio contenido="Iniciar Sesion"/>
         <div className='preguntasInicio'>
            <h3 className='laLetra'>¿Olvido su contraseña?</h3>
            <h3 className='laLetra'>Si no tienes cuenta crea una ya</h3>
         </div>
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
          <label>{this.props.pregunta}</label>
          <input className='elInput' type={this.props.tipo}></input>
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
          <button className='botonInicio'>{this.props.contenido}</button>
       </div>
     )
   }
 }
 export default Inicio;
