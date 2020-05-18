import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as clientsActions from '../../actions/clientsActions';
import { Link, Redirect } from 'react-router-dom';
import '../../../css/tabla.css';

class Tabla extends Component {

    async prueba() {
        await this.props.prueba();
        await this.props.prueba2();
    }

    async componentDidUpdate() {
        const { traerTodos, clients } = this.props;
        if(!clients.length) {
            await traerTodos();
        }
    }

    deleteClient(id) {
       const { deleteClient, clients } = this.props;
       const client = clients[id];
       deleteClient(client.id)
    }
    mostrarFilas() {
        return (
            this.props.clients.map((clients, id) => (             
                    <tr key={id}>
                        <td onClick={() => this.prueba()}>{clients.name} {clients.lastName}</td>
                        <td onClick={() => this.prueba()}>{clients.phone}</td>
                        <td onClick={() => this.prueba()}>{clients.address}</td>
                        <td onClick={() => this.prueba()}>{clients.email}</td>
                        <td onClick={() => this.prueba()}>{clients.register}</td>
                        <td>
                            <div className="flex iconContainers">
                                    <Link to={`/update/${id}`} className="editIcon">
                                        <div className="edit-solid icon"></div>
                                    </Link>
                                <div className="flex trashContainer" onClick={() => this.deleteClient(id) }>
                                    <div className="trash icon"></div>
                                </div>
                            </div>
                        </td> 
                        {
                            (this.props.showClient) ? <Redirect to={`/client/${id}`} /> : null
                        }
                    </tr>
            ))
        )
    }

    render() {
        return(
            <React.Fragment>
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>
                                name
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                E-mail
                            </th>
                            <th>
                                Register
                            </th>
                        </tr>
                    </thead>
                     <tbody>
                         {this.mostrarFilas()}
                     </tbody>
                </table>
            </React.Fragment>
         )
    }

  
}
const mapStateToProps = ({clientsReducer}) => clientsReducer
export default connect(mapStateToProps,clientsActions)(Tabla);