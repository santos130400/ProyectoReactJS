import Estilos from '../programar/Programar.module.css';
import { Component } from 'react';
import {Link} from 'react-router-dom'

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
          <div className="container-fluid p-0 m-0 row justify-content-center gray-light">
            <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 p-5 light">
              <p>Aquí podras saber como se va a comportar el clima el dia de hoy, a la hora que 
                tengas programado tus entrnamientos en exteriores.
              </p>
              <div className={Estilos.imageContainer}>
                <img className={Estilos.clima} src="https://s1.eestatic.com/2020/04/10/elandroidelibre/el_androide_libre_481464119_180501083_1280x853.jpg" alt='clima'></img>
                <img className={Estilos.clima} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsaGRZ9YFCFRTUTuIrXCsnFD6cexng--itA&usqp=CAU" alt='clima'></img>  
              </div>
              <p>Actualizado hace 1 hora</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 export default Programar;
