import React from 'react';
import './login.css'
import DataUsuario from "../json/usuario.json";
import {browserHistory} from 'react-router-3';
import swal from 'sweetalert'

const estilo ={
    'background':'url(http://aulavirtual.sistemas.unmsm.edu.pe/pregrado2017/pluginfile.php/1/theme_essential/slide1image/1528217799/17546853_102071343667142_329104064140981637_o.jpg) no-repeat center center fixed',
    'background-size':' cover',
    'height':'100%',
    'width':'100%'
};
class login extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            usuario:'',
            contrasena:''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onChange2=this.onChange2.bind(this);


    }

    onSubmit=(e)=>{
        var cons=0;
        console.log(DataUsuario.login.length)
        for(let i=0; i< DataUsuario.login.length;i++){
            console.log("xaddd"+DataUsuario.login[i].usuario);
            if((DataUsuario.login[i].usuario==this.state.usuario )
               && (DataUsuario.login[i].contrasena==this.state.contrasena)){

                cons=1;
                
               }
             else{
             }  


               
        }

        if (cons==1){
            swal("Ingresando" ,"", "success").then(
                browserHistory.push('/'+ 'home'))
        }
        else{
            swal("Usuario Incorrecto" ,"", "error");

        }


       
    }
    onChange(e) {
        this.setState({usuario: e.target.value});
      }
    onChange2(e){
        this.setState({ contrasena: e.target.value});

    }

    
    render(){
        console.log (DataUsuario.login[2].contrasena);
        console.log(DataUsuario.login.length);
        return(
            <body className="fondo">
            <div className="">
            
            <div className="modal-dialog text-center">
                <div className="col-sm-8 main-section">
                    <div className="modal-content ">
                        <div className="col-12 user-img">
                           <img src="https://www.coordinadora.com/wp-content/uploads/sidebar_usuario-corporativo.png"></img>
                        </div>

                        <form className="col-12">
                            <div className="form-group" id="user-group">
                                <input type="text" className="form-control" placeholder="Usuario" value={this.state.usuario} onChange={this.onChange}></input>
                            </div>
                            <div className="form-group" id="contrasena-group">
                                <input type="password" className="form-control" placeholder="Contraseña" value={this.state.contrasena} onChange={this.onChange2}></input>
                            </div>

                            <button type="submit" onClick={this.onSubmit} className="btn btn-primary"><i className="fas fa-sign-in-alt"></i>  Ingresar</button>
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