import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import Fatal from '../General/Fatal';
import Spinner from '../General/Spinner';
import * as clientesActions from '../../actions/clientesActions';
class Editar extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.updateClient = this.updateClient.bind(this);
    }
    
    async componentDidMount() {
        const { clientes, traerTodos } = this.props;

        if(!clientes.length) {
           await traerTodos()
        }  
    }

    async componentDidUpdate() {
        const { traerTodos, clientes, cargando } = this.props;

        if(!clientes.length && !cargando) {
            await traerTodos();
        }
    }

    handleChange(event) {
        const { 
            changueNameClient, 
            changueLastNameClient,
            changuePhoneClient,
            changueEmailClient
        } = this.props;

        switch(event.target.name) {
            case 'nombre':
                changueNameClient(event.target.value);
                break;

            case 'apellidos':
                changueLastNameClient(event.target.value);
                break;

            case 'telefono':
                changuePhoneClient(event.target.value);
                break;

            case 'email':
                changueEmailClient(event.target.value);
                break;
        }
    }

    disableButton() {
        const { nombre, apellidos, telefono, email, cargando } = this.props;

        if(cargando) return true;

        if(!nombre && !apellidos && !telefono && !email ) return true;

        return false;
    }

    updateClient() {
        const { 
            match: {params: {id} }, 
            clientes,
            nombre,
            apellidos,
            telefono,
            email,
            updateClient    
        } = this.props

        const client = clientes[id];

        const updatedClient = {
            ...client,
            nombre: !nombre ? client.nombre : nombre,
            apellidos: !apellidos ? client.apellidos : apellidos,
            telefono: !telefono ? client.telefono : telefono,
            email: !email ? client.email : email
        }

        updateClient(updatedClient);
    }

    editClients() {
        const { nombre, apellidos, telefono, email} = this.props;
        return(
            <div>
                Nombre
                <input 
                    type="text"
                    name="nombre"
                    value={nombre}
                    onChange={this.handleChange}/>
                <br /><br />
                apellidos
                <input 
                    type="text"
                    name="apellidos"
                    value={apellidos}
                    onChange={this.handleChange}/>
                <br /><br />
                Telefono
                <input 
                    type="text"
                    name="telefono"
                    value={telefono}
                    onChange={this.handleChange}/>
                <br /><br />
                Email
                <input 
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleChange}/>
                <br /><br />
                <button
                    onClick={ this.updateClient }
                    disabled={this.disableButton()}>
                    Guardar
                </button>
            </div>
        )
    }

    putClient() {
        const {
            match: {params: {id}},
            clientes, 
            cargando, 
            error 
        } = this.props;

        const client = clientes[id];

        if(error) { <Fatal mensaje={ error }/> }

        if(cargando) { <Spinner />}

        if(clientes.length) {
            return(
                <div>
                    <h2>
                        {client.nombre} {client.apellidoss}
                    </h2>
                    { this.editClients() }
                </div>
            );
        } else {
            return '';
        }
    }

    render() {
        console.log(this.props)
        return(
            <React.Fragment>
                {this.putClient()}
            </React.Fragment>
        )
    }
}
const mapStateToProps = ({clientesReducer}) => clientesReducer
export default connect(mapStateToProps,clientesActions)(Editar);