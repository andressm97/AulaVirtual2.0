import React from 'react';
class menu extends React.Component{
    
    render(){
        return(
            <div class="">
            <nav id="sidebar">
                <div class="sidebar-header pb-2 pt-2">
                    <img className="imagen" src="http://sistemas.unmsm.edu.pe/assets/fisi/img/logo/logo-fisi-header-2.png"></img>
                </div>


                <ul class="list-unstyled components">
                    <p>#hachikonight</p>
                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Mis cursos</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">

                            {
                                this.props.cursos.map((curso)=>{
                                   return( <li>
                                        <a href={"/curso/"+curso.id} >{curso.curso}</a>
                                    </li>)
                                })
                            } 

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

            
        </div>


        )
    }
}

export default menu;