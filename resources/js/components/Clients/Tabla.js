import React from 'react';
import { connect } from 'react-redux';
import * as clientsActions from '../../actions/clientsActions';
import { Link } from 'react-router-dom';
import '../../../css/tabla.css';
const Tabla = (props) => {

    const mostrarFilas = () => props.clients.map((clients, id) => (
        <tr>
            <td>{clients.name} {clients.lastName}</td>
            <td>{clients.phone}</td>
            <td>{clients.address}</td>
            <td>{clients.email}</td>
            <td>{clients.register}</td>
            <td>
                <Link to={`/update/${id}`}>
                    <div className="edit-solid icon"></div>
                </Link>
            </td>      
        </tr>
    ))

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
                    {mostrarFilas()}
                </tbody>
           </table>
       </React.Fragment>
    )
}
const mapStateToProps = ({clientsReducer}) => clientsReducer
export default connect(mapStateToProps,clientsActions)(Tabla);