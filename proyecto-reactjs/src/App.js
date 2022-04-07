import './App.css';
import React from 'react';
import { Component } from 'react';
import Inicio from './components/inicio/Inicio'
import Registro from './components/registro/Registro';
import Menu from './components/menu/Menu';
import Rutinas from './components/rutinas/Rutinas';
import Programar from './components/programar/Programar';
import CrearRutinas from './components/CrearRutinas';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

class App extends Component
{
  render()
  {
    return(
      //para ver las diferentes paginas cambiar el componente
      <Router>
        <div className='App'>
          {/* <Rutinas /> */}
            <Routes>
              <Route path='/crear-rutinas' element={<CrearRutinas />}/>
              <Route path='/inicio' element={<Inicio titulo="MY FITNESS"/>}/>
              <Route path='/layout' element={<Layout />}/>
              <Route path='/menu' element={<Menu nombre="ARNOLD RIOS" estatura="178 cm" peso="68 Kg" genero="M" lugar="Bogotá/Colombia"/>}/>
              <Route path='/programar' element={<Programar nombre="ARNOLD RIOS" estatura="178 cm" peso="68 Kg" genero="M" lugar="Bogotá/Colombia"/>}/>
              <Route path='/registro' element={<Registro />}/>
              <Route path='/rutinas' element={<Rutinas nombre="ARNOLD RIOS" estatura="178 cm" peso="68 Kg" genero="M" lugar="Bogotá/Colombia"/>}/>
            </Routes>

        </div>
      </Router>
      
    );
  }
}
export default App;
