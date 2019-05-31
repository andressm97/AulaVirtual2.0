import React from 'react';
import './login.css'
class login extends React.Component{

    render(){
        return(
            <body>
            <div className="">
            <div className="modal-dialog text-center">
                <div className="col-sm-8 main-section">
                    <div className="modal-content ">
                        <div className="col-12 user-img">
                           <img src="https://www.coordinadora.com/wp-content/uploads/sidebar_usuario-corporativo.png"></img>
                        </div>

                        <form className="col-12">
                            <div className="form-group" id="user-group">
                                <input type="text" className="form-control" placeholder="Usuario"></input>
                            </div>
                            <div className="form-group" id="contrasena-group">
                                <input type="password" className="form-control" placeholder="Contraseña"></input>
                            </div>

                            <button type="submit" className="btn btn-primary"><i className="fas fa-sign-in-alt"></i>  Ingresar</button>
                        </form>

                        <div className="col-12 forgot">
                            <a href="#">Recordar contraseña</a>
                        </div>
                    </div>
                </div> 

            </div>
            </div>
            </body>

        )
    }




}
export default login;