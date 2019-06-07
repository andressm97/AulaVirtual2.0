import React from 'react';
import './home.css'
import Tareasycursos from './tareas-cursos';
import Cursos from './cursos';
import Usuario from './usuario';
import Menu from './menu'
import Navbar from './navbar'
class home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aparecer: true,
            aparecer2: false,
            cursos: []
        };

        this.onClick = this.onClick.bind(this);
        this.onClick2 = this.onClick2.bind(this);

    }
    componentWillMount() {
        let currentComponent = this;
        let array = [];
        // let array2=[];
        let i = 0;
        fetch('https://back-ihc.herokuapp.com/api/student?id=' + this.props.params.id)
            .then(

                function (response) {
                    return response.json();
                }).then(function (data) {
                    console.log(data.programmings[0].courses[0].name);
                    data.programmings.forEach(element => {
<<<<<<< HEAD
                        array[i] = {
                            "creditos": element.courses[0].credit,
                            "ciclo": element.courses[0].cycle,
                            "curso": element.courses[0].name,
                            "nprofesor": element.teachers[0].name,
                            "aprofesor": element.teachers[0].surname
                        }
=======
                    array[i]={    
                     "creditos":element.courses[0].credit,
                      "ciclo" :element.courses[0].cycle,
                      "curso":element.courses[0].name,
                      "id":element.courses[0].id,
                       "nprofesor": element.teachers[0].name,
                        "aprofesor":element.teachers[0].surname,
                        "salon":element.classroom
                    }
>>>>>>> master
                        // array[i]=element.courses[0];   
                        // console.log(array2[i])
                        console.log('[CurrentArray]: ' + array[i]);
                        i++;
                    });

                    // console.log("este es "+array[1].id);
                    currentComponent.setState({
                        cursos: array

                    })

                })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

    }




    onClick = (e) => {
        if (this.state.aparecer) {
            this.setState({
                aparecer: false,
            })
        }



    }
    onClick2 = (e) => {
        if (!this.state.aparecer) {
            this.setState({
                aparecer2: true,
            })
        }



    }

    render() {
        console.log("id :" + this.props.params.id);
        console.log("array" + this.state.cursos);
        return (
            <div class="wrapper pr-1 pl-1">
<<<<<<< HEAD
            <Menu cursos={this.state.cursos} alumnoid={this.props.params.id}></Menu>
            <div class="container">
                <Navbar></Navbar>
                <Tareasycursos cursos={this.state.cursos} ></Tareasycursos>
            </div>
            
=======
                <Menu cursos={this.state.cursos}></Menu>
                <div class="container">
                    <Navbar></Navbar>
                    <Tareasycursos cursos={this.state.cursos}></Tareasycursos>
                </div>

>>>>>>> refs/remotes/origin/master
            </div>

            //             <div class="wrapper pr-1 pl-1">
            //                 <nav id="sidebar">
            //                     <div class="sidebar-header pb-2 pt-2">
            //                         <img className="imagen" src="http://sistemas.unmsm.edu.pe/assets/fisi/img/logo/logo-fisi-header-2.png"></img>
            //                     </div>


            //                     <ul class="list-unstyled components">
            //                         <p>#hachikonight</p>
            //                         <li class="active">
            //                             <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Mis cursos</a>
            //                             <ul class="collapse list-unstyled" id="homeSubmenu">

            //                                 {
            //                                     this.state.cursos.map((curso)=>{
            //                                        return( <li>
            //                                             <a>{curso.name}</a>
            //                                         </li>)
            //                                     })
            //                                 }
            // {/* 
            //                                 <li>
            //                                     <a href="#" onClick={this.onClick}>Etica de la profesion</a>
            //                                 </li>
            //                                 <li>
            //                                     <a href="#">Interaccion Hombre computador</a>
            //                                 </li>
            //                                 <li>
            //                                     <a href="#">Calculo 2</a>
            //                                 </li> */}
            //                             </ul>
            //                         </li>

            //                         {/* <li>
            //                         <a href="#">About</a>
            //                     </li> */}
            //                         {/* <li>
            //                         <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Calendario</a>
            //                         <ul class="collapse list-unstyled" id="pageSubmenu">
            //                             <li>
            //                                 <a href="#">page1</a>
            //                             </li>
            //                             <li>
            //                                 <a href="#">page2</a>
            //                             </li>
            //                             <li>
            //                                 <a href="#">page3</a>
            //                             </li>
            //                         </ul> 
            //                     </li> */}
            //                         <li>
            //                             <a href="#">Acerca de</a>
            //                         </li>
            //                         <li>
            //                             <a href="#">Contactenos</a>
            //                         </li>
            //                     </ul>

            //                     {/* <ul class="list-unstyled CTAs">
            //                     <li>
            //                         <a href="#" class="download">Download code</a>
            //                     </li>
            //                     <li>
            //                         <a href="#" class="article">article</a>
            //                     </li>
            //                 </ul> */}
            //                 </nav>

            //                 <div class="container  ">
            //                     <nav class="navbar navbar-expand-lg navbar-light mb-2 p-1 menu-color">

            //                         {/* <button type="button" id="sidebarCollapse" class="btn btn-info">
            //                     <i class="fa fa-align-justify"></i> <span>toggle sidebar</span>
            //                 </button> */}

            //                         {/* <!--<a class="navbar-brand" href="#">Navbar</a> --> */}
            //                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            //                             <span class="navbar-toggler-icon"></span>
            //                         </button>
            //                         <div class="collapse navbar-collapse" id="navbarNav">
            //                             <ul class="navbar-nav ml-auto">
            //                                 <li class="nav-item active">
            //                                     <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
            //                                 </li>
            //                                 <li class="nav-item">
            //                                     <a class="nav-link" href="#">cursos</a>
            //                                 </li>
            //                                 <li class="nav-item">
            //                                     <a class="nav-link" href="#">Mensajes</a>
            //                                 </li>
            //                                 <li class="nav-item dropdown ">
            //                                     <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><i class="fas fa-user icono"></i></a>
            //                                     <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            //                                         <a class="dropdown-item" href="/user">mis datos</a>
            //                                         <a class="dropdown-item" href="/">Cerrar Sesion</a>
            //                                         {/* <div class="dropdown-divider"></div>
            //           <a class="dropdown-item" href="#">Something else here</a> */}
            //                                     </div>
            //                                 </li>
            //                             </ul>
            //                         </div>
            //                     </nav>

            //                     {/* aquiva */}
            //                     {this.state.aparecer ? (
            //                         <Tareasycursos></Tareasycursos>
            //                     ) : (<Cursos></Cursos>)}

            //                     {/* {
            //         this.state.aparecer2?(
            //             <Usuario></Usuario>
            //         ):("")
            //     } */}
            //                     {/*         */}
            //                     {/* <Usuario></Usuario> */}
            //                 </div>

            //             </div>



        )
    }





}
export default home;