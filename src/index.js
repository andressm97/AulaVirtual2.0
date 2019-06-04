import React from 'react';
// import { Router, Route, browserHistory } from 'react-router-3';
// import { Router, Route, browserHistory } from 'react-router-3';

import ReactDOM from 'react-dom';
import './index.css';
import Login from './componentes/login';
import home from './componentes/home';


import * as serviceWorker from './serviceWorker';
import { browserHistory,Router,Route } from 'react-router-3';

class Index extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Router 
                    component={()=> <Login/>}
                    path="/">
                </Router>


            </Router>
        )
    }
}




ReactDOM.render(<Index/>, document.getElementById('root'));
serviceWorker.unregister();
