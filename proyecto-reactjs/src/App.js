import './App.css';
import React from 'react';
import { Component } from 'react';
import Inicio from './pages/Inicio'
import Registro from './pages/Registro';
import Menu from './pages/Menu';
import Rutinas from './pages/Rutinas';
import Programar from './pages/Programar';
import CrearRutinas from './pages/CrearRutinas';

class App extends Component
{
  render()
  {
    return(
      //para ver las diferentes paginas cambiar el componente
      <div className='App'>
        <Rutinas />
      </div>
    );
  }
}
export default App;
