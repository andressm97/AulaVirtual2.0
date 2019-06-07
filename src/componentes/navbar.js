import React from 'react';
class navbar extends React.Component{

    render(){
        return(
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
                                <a class="nav-link" href={"/home/"+ this.props.alumnoid}>Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">cursos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Mensajes</a>
                            </li>
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><i class="fas fa-user icono"></i></a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/user">mis datos</a>
                                    <a class="dropdown-item" href="/">Cerrar Sesion</a>
                                    {/* <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Something else here</a> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

  
        )
    }
}
export default navbar