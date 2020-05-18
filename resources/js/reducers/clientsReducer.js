import {    LOADING, 
            ADD_CLIENT, 
            DELETE_CLIENT, 
            UPDATE_CLIENT, 
            GET_ALL, 
            ERROR,
            CHANGE_NAME_CLIENT,
            CHANGE_LAST_NAME_CLIENT,
            CHANGE_PHONE_CLIENT,
            CHANGE_EMAIL_CLIENT,
            CHANGE_ADDRESS_CLIENT,
            CLEAN_ATRIBUTE,
            PRUEBA,
            PRUEBA2 } from '../types/clientsTypes';

const INITIAL_STATE = {
    clients: [],
    name: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    loading: false,
    error: '',
    showClient: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case LOADING:
            return {
                ...state,
                loading: true
            }
        
        case GET_ALL:
            return {
                ...state,
                loading: false,
                clients: action.payload,
                error: ''
            }
        
        case UPDATE_CLIENT:
            return {
                ...state,
                clients: [],
                name: '',
                lastName: '',
                phone: '',
                email: '',
                address: '',
                loading: false,
            }

        case ADD_CLIENT:
            return {
                ...state,
                clients: [],
                loading: false,
                error: ''
            }

        case ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }

        case CHANGE_NAME_CLIENT:
            return{
                ...state,
                name: action.payload
            }

        case CHANGE_LAST_NAME_CLIENT:
            return{
                ...state,
                lastName: action.payload
            }

        case CHANGE_PHONE_CLIENT:
            return{
                ...state,
                phone: action.payload
            }

        case CHANGE_EMAIL_CLIENT:
            return{
                ...state,
                email: action.payload
            }
        
        case CHANGE_ADDRESS_CLIENT:
            return {
                ...state,
                address: action.payload
            }

        case CLEAN_ATRIBUTE:
            return {
                ...state,
                name: '',
                lastName: '',
                phone: '',
                email: '',
                address: ''
            }

        case PRUEBA:
            return {
                ...state,
                showClient: true
            }
    
        case PRUEBA2:
            return {
                ...state,
                showClient: false
            }

        default: return state;
    }
}

