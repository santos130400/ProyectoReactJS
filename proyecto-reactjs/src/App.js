import './App.css';
import React from 'react';
import { Component } from 'react';
import Inicio from './pages/Inicio'
import Registro from './pages/Registro';
import Menu from './pages/Menu';
import Rutinas from './pages/Rutinas';
import Programar from './pages/Programar';
import CrearRutinas from './pages/CrearRutinas';
import Layout from './pages/Layout';
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
              <Route path='/inicio' element={<Inicio />}/>
              <Route path='/layout' element={<Layout />}/>
              <Route path='/menu' element={<Menu />}/>
              <Route path='/programar' element={<Programar />}/>
              <Route path='/registro' element={<Registro />}/>
              <Route path='/rutinas' element={<Rutinas />}/>
            </Routes>

        </div>
      </Router>
      
    );
  }
}
export default App;
