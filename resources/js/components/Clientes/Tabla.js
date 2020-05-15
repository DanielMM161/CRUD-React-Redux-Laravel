import React from 'react';
import { connect } from 'react-redux';
import * as clientesActions from '../../actions/clientesActions';
import { Link } from 'react-router-dom';
import '../../../css/tabla.css';
const Tabla = (props) => {

    const mostrarFilas = () => props.clientes.map((clientes, id) => (
        <tr>
            <td>{clientes.nombre} {clientes.apellidos}</td>
            <td>{clientes.telefono}</td>
            <td>{clientes.direccion}</td>
            <td>{clientes.email}</td>
            <td>{clientes.fechaAlta}</td>
            <td>
                <Link to={`/editar/${id}`}>
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
                           Nombre
                       </th>
                       <th>
                           Teléfono
                       </th>
                       <th>
                           Direccion
                       </th>
                       <th>
                           E-mail
                       </th>
                       <th>
                           Fecha Alta
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
const mapStateToProps = ({clientesReducer}) => clientesReducer
export default connect(mapStateToProps,clientesActions)(Tabla);