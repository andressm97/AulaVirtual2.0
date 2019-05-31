import React from 'react';
import './home.css'
import Tareasycursos from './tareas-cursos';
import Cursos from './cursos';
import Usuario from './usuario';
class home extends React.Component{




    render(){
        return(
    
        <div class="wrapper pr-1 pl-1">
            <nav id="sidebar">
                <div class="sidebar-header pb-2 pt-2">
                    <img className="imagen" src="http://sistemas.unmsm.edu.pe/assets/fisi/img/logo/logo-fisi-header-2.png"></img>
                </div>
                
                
                <ul class="list-unstyled components">
                    <p>#hachikonight</p>
                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Mis cursos</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Etica de la profesion</a>
                            </li>
                            <li>
                                <a href="#">Interaccion Hombre computador</a>
                            </li>
                            <li>
                                <a href="#">Calculo 2</a>
                            </li>
                        </ul> 
                    </li>
                    
                    {/* <li>
                        <a href="#">About</a>
                    </li> */}
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Calendario</a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">page1</a>
                            </li>
                            <li>
                                <a href="#">page2</a>
                            </li>
                            <li>
                                <a href="#">page3</a>
                            </li>
                        </ul> 
                    </li>
                    <li>
                        <a href="#">Acerca de</a>
                    </li>
                    <li>
                        <a href="#">Contactenos</a>
                    </li>
                </ul>
                
                {/* <ul class="list-unstyled CTAs">
                    <li>
                        <a href="#" class="download">Download code</a>
                    </li>
                    <li>
                        <a href="#" class="article">article</a>
                    </li>
                </ul> */}
            </nav>
            
            <div class="container  ">
                <nav class="navbar navbar-expand-lg navbar-light mb-2 p-1 menu-color">
                
                {/* <button type="button" id="sidebarCollapse" class="btn btn-info">
                    <i class="fa fa-align-justify"></i> <span>toggle sidebar</span>
                </button> */}
                
       {/* <!--<a class="navbar-brand" href="#">Navbar</a> --> */}
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav ml-auto">
           <li class="nav-item active">
             <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Recursos</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Mensajes</a>
           </li>
           <li class="nav-item ">
             <a class="nav-link " href="#"> <i class="fas fa-user icono"></i></a>
           </li>
         </ul>
       </div>
     </nav>
                
    {/* aquiva */}
    {/* <Tareasycursos></Tareasycursos> */}
     <Cursos></Cursos>        
    {/* <Usuario></Usuario> */}
    </div>       
            
        </div>

            

        )
    }





}
export default home;