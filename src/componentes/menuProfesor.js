import React from 'react';
import Tareasycursos from './tareas-cursos';

class menuProfesor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onClickState: false
        }

        this.onClickCourse = this.onClickCourse.bind(this);
    }

    onClickCourse = (e) => {
        this.setState({
            onClickState: true
        });
    }

    render() {
        return (
            <div className="">
                <nav id="sidebar">
                    <div className="sidebar-header pb-2 pt-2">
                        <img className="imagen" src="http://sistemas.unmsm.edu.pe/assets/fisi/img/logo/logo-fisi-header-2.png" />
                    </div>

                    <ul className="list-unstyled components">
                        <p>#HachikoNight</p>
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Mis cursos</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="" onClick={this.onClickCourse}>{this.props.cursos.course}</a>
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
                </nav>
            </div>
        )
    }

}

export default menuProfesor;