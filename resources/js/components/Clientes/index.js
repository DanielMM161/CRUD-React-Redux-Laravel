import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as clientesActions from '../../actions/clientesActions';
import Tabla from './Tabla';
import Fatal from '../General/Fatal';
import Spinner from '../General/Spinner';

class Clientes extends Component {

    componentDidMount() {
        if(!this.props.clientes.length) {
            this.props.traerTodos();
        }
    }

    mostrarContenido() {
        if (this.props.cargando) {
            return <Spinner />;
        }
      
        if(this.props.error) {
        return <Fatal mensaje={ this.props.error } />;
        }
      
        return <Tabla />;
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Clientes</h1>
                { this.mostrarContenido() }
            </div>
        )
    }
}

const mapStateToProps = ({clientesReducer}) => clientesReducer
export default connect(mapStateToProps,clientesActions)(Clientes);

