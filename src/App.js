import React from 'react';
import logo from './logo.svg';
import Login from './componentes/login'
import Home from './componentes/home'
import Usuario from './componentes/usuario'
import TareasyCursos from './componentes/tareas-cursos'


import { Router, Route, browserHistory } from 'react-router-3';

// import './App.css';

function App() {
  // render() {
    return(
        <Router history={browserHistory}>
        <Route
            component={() => <Login/>}
            path="/">
        </Route>
        <Route 
            component={()=><Home/>}
            path="/home">
        </Route>
        {/* <Route 
            component={()=><Usuario/>}
            path="/usuario">
        </Route>
        <Route 
            component={()=><TareasyCursos/>}
            path="/tareas">
        </Route>
         */}
        {/*
        <Route path="/filtro/:name" component={VistaIntermedia}></Route>
        <Route path="/vista/nueva" component={AppNueva}></Route>
        <Route path="/vista/nueva2" component={AppNueva2}></Route>
        <Route path="/vista/tabla" component={ VistaTablaNuevo}></Route>
        <Route path="/vista/loginNyA" component={LoginFormNombreApellidos}></Route>
        <Route path="/vista/imprimir" component={ComponenteEditable}></Route>
        <Route path="/formulario/:codigo" component={Formulario}></Route> */}
        
      </Router>
      )
  // }
  // return (
  //   // <div className="">
  //   //   <header className="">
  //   // sdas

      



  //   //   {/* <h1>holis</h1> */}
  //   //     {/* <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>probando la wea</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a> */}
        
  //   //   </header>
  //   // </div>
    
  //   // <Login></Login>
    
  //   <Home></Home>
  // );
}

export default App;
