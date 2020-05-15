import {    CARGANDO, 
            AGREGAR, 
            BORRAR, 
            UPDATE_CLIENT, 
            TRAER_TODOS, 
            ERROR,
            CHANGE_NAME_CLIENT,
            CHANGE_LAST_NAME_CLIENT,
            CHANGE_PHONE_CLIENT,
            CHANGE_EMAIL_CLIENT,
            CLEAN_ATRIBUTE } from '../types/clientesTypes';

const INITIAL_STATE = {
    clientes: [],
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
    cargando: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case CARGANDO:
            return {
                ...state,
                cargando: true
            }
        
        case TRAER_TODOS:
            return {
                ...state,
                cargando: false,
                clientes: action.payload,
                error: ''
            }

        case ERROR:
            return{
                ...state,
                error: action.payload,
                cargando: false
            }

        case CHANGE_NAME_CLIENT:
            return{
                ...state,
                nombre: action.payload,
            }

        case CHANGE_LAST_NAME_CLIENT:
            return{
                ...state,
                apellidos: action.payload,
            }

        case CHANGE_PHONE_CLIENT:
            return{
                ...state,
                telefono: action.payload,
            }

        case CHANGE_EMAIL_CLIENT:
            return{
                ...state,
                email: action.payload,
            }
        case CLEAN_ATRIBUTE:
            return {
                ...state,
                nombre: '',
                apellidos: '',
                telefono: '',
                email: ''
            }

        case UPDATE_CLIENT:
            return {
                ...state,
                clientes: [],
                nombre: '',
                apellidos: '',
                telefono: '',
                email: '',
                cargando: false,
            }

        default: return state;
    }
}

