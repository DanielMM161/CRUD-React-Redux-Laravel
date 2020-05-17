import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fatal from '../General/Fatal';
import Spinner from '../General/Spinner';
import * as clientsActions from '../../actions/clientsActions';

class Update extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.updateClient = this.updateClient.bind(this);
    }
    
    async componentDidMount() {
        const { clients, traerTodos } = this.props;

        if(!clients.length) {
           await traerTodos()
        }  
    }

    async componentDidUpdate() {
        const { traerTodos, clients, loading } = this.props;

        if(!clients.length && !loading) {
            await traerTodos();
        }
    }

    handleChange(event) {
        const { 
            changueNameClient, 
            changueLastNameClient,
            changuePhoneClient,
            changueEmailClient,
            changueAddressClient
        } = this.props;

        switch(event.target.name) {
            case 'name':
                changueNameClient(event.target.value);
                break;

            case 'lastName':
                changueLastNameClient(event.target.value);
                break;

            case 'phone':
                changuePhoneClient(event.target.value);
                break;

            case 'email':
                changueEmailClient(event.target.value);
                break;
        }
    }

    disableButton() {
        const { name, lastName, phone, email, loading } = this.props;

        if(loading) return true;

        if(!name && !lastName && !phone && !email ) return true;

        return false;
    }

    updateClient() {
        const { 
            match: {params: {id} }, 
            clients,
            name,
            lastName,
            phone,
            email,
            updateClient    
        } = this.props

        const client = clients[id];

        const updatedClient = {
            ...client,
            name: !name ? client.name : name,
            lastName: !lastName ? client.lastName : lastName,
            phone: !phone ? client.phone : phone,
            email: !email ? client.email : email
        }

        updateClient(updatedClient);
        console.log(this.props)
    }

    editClients() {
        const { name, lastName, phone, email} = this.props;
        return(
            <div>
                Name
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}/>
                <br /><br />
                Last Name
                <input 
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange}/>
                <br /><br />
                Phone
                <input 
                    type="text"
                    name="phone"
                    value={phone}
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
                    Save
                </button>
            </div>
        )
    }

    putClient() {
        const {
            match: {params: {id}},
            clients, 
            loading, 
            error 
        } = this.props;

        if(error) { <Fatal mensaje={ error }/> }

        if(loading) { <Spinner />}

        if(clients.length) {
            const client = clients[id];
            return(
                <div>
                    <h2>
                        {client.name} {client.lastName}
                    </h2>
                    { this.editClients() }
                </div>
            );
        } else {
            return '';
        }
    }

    render() {
        return(
            <React.Fragment>
                {this.putClient()}
            </React.Fragment>
        )
    }
}
const mapStateToProps = ({clientsReducer}) => clientsReducer
export default connect(mapStateToProps,clientsActions)(Update);