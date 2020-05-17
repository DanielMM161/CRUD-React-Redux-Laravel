import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as clientsActions from '../../actions/clientsActions';
import '../../../css/add.css';

class Add extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

            case 'address':
                changueAddressClient(event.target.value);
                break;
        }
    }

    handleSubmit(event) {
        const { name, lastName, phone, email, address, addClient } = this.props;

        const newClient = {
            name: name,
            lastName: lastName,
            phone: phone,
            email: email,
            address: address,
        }

        addClient(newClient);
        event.preventDefault();
    }

    render() {
        const { name, lastName, phone, email, address } = this.props;
       return(
           <div className="flex justifyc alignc flex-col">
               <h1>New Client</h1>
               <form>
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
                    Address
                    <input 
                        type="text"
                        name="address"
                        value={address}
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
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}/>
                    <br /><br />
                    <input type='submit' value='Add' onClick={this.handleSubmit}/>
               </form>
           </div>
       )
    }
}
const mapStateToProps = ({clientsReducer}) => clientsReducer
export default connect(mapStateToProps,clientsActions)(Add);
