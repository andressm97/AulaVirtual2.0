
import React from 'react';

class tareasyCursos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      card: true,
    };

    this.onClick = this.onClick.bind(this);
    // this.onClick2= this.onClick2.bind(this);

  }


  onClick = (e) => {
    if (this.state.card) {
      this.setState({
        card: false,
      })
    }



  }
  render() {
    return (

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
                    <div id="collapse1" class="panel-collapse collapse show">
                      <div class="panel-body">
                        <div class="list-group-flush">

                          <a href="#" class="list-group-item list-group-item-action" >Presentacion de proyecto</a>
                          <a href="#" class="list-group-item list-group-item-action" onClick={this.onClick}>Entrega de Tarea IHC</a>
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
                      <div class="panel-body">----</div>
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
                      <div class="panel-body">Examen Parcial</div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                

  )
    }

}

export default tareasyCursos;