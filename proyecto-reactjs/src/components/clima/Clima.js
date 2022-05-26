import React, {useState} from "react";
import Estilos from '../clima/Clima.module.css';

function Clima(){
    const apiClima = '5291b2ebce9d58450ddf36ad035aa511';
    const [datoClima, setDatoClima] = useState([{}]);
    const [ciudad, setCiudad] = useState("Bogota");

    const getClima = (event) => {
        if (event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiClima}`).then(
                response => response.json()
            ).then(
                dato => {
                    setDatoClima(dato)
                }
            )
        }
    }

    let imagenActual = Estilos.carga;
    try {
        if(datoClima.main.temp <= 10){
            imagenActual = Estilos.frio;
        }
        if(datoClima.main.temp > 10 && datoClima.main.temp < 20 ){
            imagenActual = Estilos.normal;
        }
        if(datoClima.main.temp >= 20){
            imagenActual = Estilos.calor;
        } 
    } catch (error) {
        
    }

    return(
        <div className={Estilos.contenedorContenido}>
          <div className={Estilos.imagenes}>
            <div className={imagenActual}>
            </div>
          </div>
          <div className={Estilos.datos}>
            <input className={Estilos.inputCiudad} 
            placeholder="Ingrese la ciudad ..."
            onChange={e => setCiudad (e.target.value)}
            value={ciudad}
            onKeyPress={getClima}
            ></input>
            {typeof datoClima.main === 'undefined' ? (
                <div>
                    <p> Bienvenido a programar tu entrenamiento, si quiere saber el clima de otra ciudad por favor ingreselo, de lo contrario revise el nombre de la ciudad</p>
                </div>
            ):(
                <div>
                    <p className={Estilos.ciudad}>{datoClima.name}</p>
                    <p className={Estilos.temperatura}>{Math.round(datoClima.main.temp)}°C</p>
                    <p className={Estilos.ambiente}>{datoClima.weather[0].main}</p>
                </div> 
            )}

            {datoClima.cod === "404" ? (
                <p> Error revise el nombre de la ciudad</p>
            ) : (
                <></>
            )
            }
          </div>
        </div>
    )
}

export default Clima;