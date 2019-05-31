
import React from 'react';
class tareasyCursos extends React.Component{

    render(){
        return(

            <div className="container">      
            <h3>Tareas Pendientes</h3>
            <div className="row">
                       <div className="col-6">
                           <div class="card " >
                               <div class="card-body">
                                  
                                  <div class="panel-group" id="accordion">
         <div class="panel panel-default">
           <div class="panel-heading">
             <h6 class="panel-title">
               <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
               HOY</a>
             </h6>
           </div>
           <div id="collapse1" class="panel-collapse collapse in">
             <div class="panel-body">
             <div class="list-group-flush">
       
         <a href="#" class="list-group-item list-group-item-action">Presentacion de proyecto</a>
         <a href="#" class="list-group-item list-group-item-action">Entrega de Tarea IHC</a>
         <a href="#" class="list-group-item list-group-item-action">Exposicion</a>
         <a href="#" class="list-group-item list-group-item-action disabled">Entrega de Tarea Calculo</a>
       </div>
       
             </div>
           </div>
         </div>
         <div class="panel panel-default">
           <div class="panel-heading">
             <h6 class="panel-title">
               <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
               MAÑANA</a>
             </h6>
           </div>
           <div id="collapse2" class="panel-collapse collapse">
             <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
             minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
             commodo consequat.</div>
           </div>
         </div>
         <div class="panel panel-default">
           <div class="panel-heading">
             <h6 class="panel-title">
               <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
               PROXIMAMENTE</a>
             </h6>
           </div>
           <div id="collapse3" class="panel-collapse collapse">
             <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
             minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
             commodo consequat.</div>
           </div>
         </div>
       </div>
                                   
                               
                               
                               </div>
                           </div>
                       </div>
               
                       <div className="col-6">
                           <div class="card " >
                               <div class="card-body">
                                   <h5 class="card-title">Card title</h5>
                                   <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" class="card-link">Card link</a>
                                   <a href="#" class="card-link">Another link</a>
                               </div>
                           </div>
                       </div>
               </div>
       
           <h3>Cursos de hoy</h3>
       
           <div className="row">
                       
                       <div className="col-12">
                       <div id="accordion">
         <div class="card">
           <div class="card-header" id="headingOne">
             <h5 class="mb-0">
               <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   Etica de la Profesion
               </button>
             </h5>
           </div>
       
           <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
             <div class="card-body">
               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
             </div>
           </div>
         </div>
         <div class="card">
           <div class="card-header" id="headingTwo">
             <h5 class="mb-0">
               <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                 Interaccion Hombre Computador
               </button>
             </h5>
           </div>
           <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
             <div class="card-body">
               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
             </div>
           </div>
         </div>
         <div class="card">
           <div class="card-header" id="headingThree">
             <h5 class="mb-0">
               <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 Calculo V 
               </button>
             </h5>
           </div>
           <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
             <div class="card-body">
               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
             </div>
           </div>
         </div>
       </div></div>
           </div>
           
                  
                   
                  
           </div>
                   
                   








        )
    }


}

export default tareasyCursos;