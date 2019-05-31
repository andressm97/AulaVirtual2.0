import React from 'react';
// import { Router, Route, browserHistory } from 'react-router-3';
// import { Router, Route, browserHistory } from 'react-router-3';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import login from './componentes/login';
import home from './componentes/home';


import * as serviceWorker from './serviceWorker';

class Index extends React.Component{
    // render() {
    //     return(
    //         <Router history={browserHistory}>
    //         <Route
    //             component={() => <login/>}
    //             path="/">
    //         </Route>
    //         <Route 
    //             component={()=><home/>}
    //             path="/home">
    //         </Route>
            
    //         {/*
    //         <Route path="/filtro/:name" component={VistaIntermedia}></Route>
    //         <Route path="/vista/nueva" component={AppNueva}></Route>
    //         <Route path="/vista/nueva2" component={AppNueva2}></Route>
    //         <Route path="/vista/tabla" component={ VistaTablaNuevo}></Route>
    //         <Route path="/vista/loginNyA" component={LoginFormNombreApellidos}></Route>
    //         <Route path="/vista/imprimir" component={ComponenteEditable}></Route>
    //         <Route path="/formulario/:codigo" component={Formulario}></Route> */}
            
    //       </Router>
    //       )
    //   }
}




ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
