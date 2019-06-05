import React from 'react';

class homeProfesor extends React.Component {

  constructor (props) {
    super (props);
  }

  render() {
    return (
      <div className="wrapper pr-1 pl-1">
        <nav id="sidebar">
          <div class="sidebar-header pb-2 pt-2">
            <img className="imagen" src="http://sistemas.unmsm.edu.pe/assets/fisi/img/logo/logo-fisi-header-2.png"></img>
          </div>

          <ul className="list-unstyle componenets">
            <p>HachikoNight</p>
            <li className = "active">
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Mis cursos</a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }

}

export default homeProfesor;
