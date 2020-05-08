import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as clientesActions from '../../actions/clientesActions';

class Clientes extends Component {

    render() {
        console.log(this.props)
        return (
            <div>Clientes</div>
        )
    }
}

const mapStateToProps = ({clientesReducer}) => clientesReducer
export default connect(mapStateToProps,clientesActions)(Clientes);
