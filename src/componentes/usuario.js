import React from 'react';
import Menu from './menu';
import Navbar from './navbar';
class usuario extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            
            cursos: [],
            datos:{}
        };

    }
    componentWillMount() {
        let currentComponent = this;
        let array = [];
        // let array2=[];
        let i = 0;
        fetch('https://back-ihc.herokuapp.com/api/student?id=' + this.props.params.alumno)
            .then(

                function (response) {
                    return response.json();
                }).then(function (data) {
                    console.log(data.programmings[0].courses[0].name);
                    data.programmings.forEach(element => {
                    array[i]={    
                     "creditos":element.courses[0].credit,
                      "ciclo" :element.courses[0].cycle,
                      "curso":element.courses[0].name,
                      "id":element.courses[0].id,
                       "nprofesor": element.teachers[0].name,
                        "aprofesor":element.teachers[0].surname,
                        "salon":element.classroom
                    }
                        // array[i]=element.courses[0];   
                        // console.log(array2[i])
                        console.log('[CurrentArray]: ' + array[i]);
                        i++;
                    });

                    // console.log("este es "+array[1].id);
                    currentComponent.setState({
                        cursos: array,
                        datos:data

                    })

                })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

    }

    
    render(){
        return(

            <div class="wrapper pr-1 pl-1">
            
            <Menu cursos={this.state.cursos} alumnoid={this.props.params.alumno}></Menu>
            <div className="container">
            
            <Navbar alumnoid={this.props.params.alumno}></Navbar>

            <div className="container">
            <div className="row">
            <div className="col-12 p-5">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Nombres</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Nombres" value={this.state.datos.name} disabled/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Apellido</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Apellido" value={this.state.datos.surname} disabled/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Direccion</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value="av.Marquez de Corpac Mz C Lt 18"/>
                    </div>
                    <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="inputAddress2">Ciclo</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.cycle} disabled/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputAddress2">plan</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.plan} disabled/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputAddress2">Promedio</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.balanced} disabled/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputAddress2">Estado</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.situation} disabled/>
                    </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Correo Institucional</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.email} disabled/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputCity">Escuela profesional</label>
                        <input type="text" class="form-control" id="inputCity" value="Ingenieria de Software" disabled/>
                        </div>
                        <div class="form-group col-md-4">
                        <label for="inputState">Facultad</label>
                        <input type="text" class="form-control" id="inputZip" value="Ingeniera de Sistemas e Informatica" disabled/>

                        </div>
                        <div class="form-group col-md-2">
                        <label for="inputZip">Codigo</label>
                        <input type="text" class="form-control" id="inputZip" value={this.state.datos.code} disabled/>
                        </div>
                    </div>
                   
                    <a type="submit" href={"/home/"+this.props.params.alumno} class="btn btn-primary">Aceptar</a>
            </form>
        
            </div>
        </div>
        
        </div>
            </div>
            </div>
        )
    }
}
export default usuario;