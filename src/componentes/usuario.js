import React from 'react';

class usuario extends React.Component{
    
    render(){
        return(
            <div className="container">
            <div className="row">
            <div className="col-12 p-5">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Nombres</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Nombres" value="Andres Leonardo" disabled/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Apellido</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Apellido" value="Satornicio Medina " disabled/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Direccion</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value="av.Marquez de Corpac Mz C Lt 18"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Correo Institucional</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value="andres.satornicio@unmsm.edu.pe" disabled/>
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
                        <input type="text" class="form-control" id="inputZip" value="15200227" disabled/>
                        </div>
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Aceptar</button>
            </form>
        
            </div>
        </div>
        
        </div>
        )
    }
}
export default usuario;