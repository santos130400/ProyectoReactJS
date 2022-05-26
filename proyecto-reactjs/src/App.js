import './App.css';
import React from 'react';
import { Component } from 'react';
import Inicio from './components/inicio/Inicio'
import Registro from './components/registro/Registro';
import Menu from './components/menu/Menu';
import Rutinas from './components/rutinas/Rutinas';
import Programar from './components/programar/Programar';
import CrearRutinas from './components/crear-rutinas/CrearRutinas';
import NotFound from "./components/NotFound/NotFound";
import Layout from './components/Layout';
import axios from '../src/instances/axiosInstance';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


class App extends Component
{
  state ={
    usuarios:[],
    nuevoUsuario: {
      nombre: "",
      contra: ""
    }
  };

  fetchToDoItmes = async () => {
    try {
      const response = await axios.get("/posts");
      const losusuarios = response.data.slice(0, 4).map((usuario) => ({
        nombre: usuario.id,
        contra: usuario.userId
      }));

      this.setState({usuarios: losusuarios,
      nuevoUsuario:""});
    } catch (err) {
      console.error("Error importando datos", err);
    }
  };
  componentDidMount(){
    this.fetchToDoItmes();
  }

  render()
  {
    return(
      //para ver las diferentes paginas cambiar el componente
      <Router>
        <div className='App'>
          {/* <Rutinas /> */}
            <Routes>
              <Route path='/rutinas/crear-rutinas' element={<CrearRutinas nombre="ARNOLD RIOS" estatura="178 cm" peso="68 Kg" genero="M" lugar="Bogotá/Colombia"/>}/>
              <Route path='/' element={<Inicio titulo="MY FITNESS" />}/>
              <Route path='/layout' element={<Layout />}/>
              <Route path='/menu' element={this.state.usuarios.map(elementoLista =><Menu nombre= {elementoLista.nombre} estatura="178 cm" peso="68 Kg" genero="M" lugar="Bogotá/Colombia" />)}/>
              <Route path='/programar' element={<Programar nombre="ARNOLD RIOS" estatura="178 cm" peso="68 Kg" genero="M" lugar="Bogotá/Colombia"/>}/>
              <Route path='/registro' element={<Registro />}/>
              <Route path='/rutinas' element={<Rutinas nombre="ARNOLD RIOS" estatura="178 cm" peso="68 Kg" genero="M" lugar="Bogotá/Colombia"/>}/>
              <Route path='/' exact>
              <Route component={NotFound} />
              </Route>
            </Routes>
        </div>
      </Router>
      
    );
  }
}
export default App;
