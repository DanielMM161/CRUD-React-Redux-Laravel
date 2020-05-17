import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as clientsActions from '../../actions/clientsActions';
import Tabla from './Tabla';
import Fatal from '../General/Fatal';
import Spinner from '../General/Spinner';

class Clients extends Component {

    componentDidMount() {
        if(!this.props.clients.length) {
            this.props.traerTodos();
        }
    }

    mostrarContenido() {
        if (this.props.loading) {
            return <Spinner />;
        }
      
        if(this.props.error) {
            return <Fatal mensaje={ this.props.error } />;
        }
      
        return <Tabla />;
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Link to={`/add`}>
                        <div className="plus icon"></div>   
                    </Link>
                </div>
                <h1>Clients</h1>
                { this.mostrarContenido() }
            </div>
        )
    }
}

const mapStateToProps = ({clientsReducer}) => clientsReducer
export default connect(mapStateToProps,clientsActions)(Clients);

