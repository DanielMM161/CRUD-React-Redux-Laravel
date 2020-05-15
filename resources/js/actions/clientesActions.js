import axios from 'axios';
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

export const traerTodos = () => async(dispatch) => {
    dispatch({
        type: CARGANDO
    });

    try {
        const respuesta = await axios.get('/api/clientes')
        dispatch({
            type: TRAER_TODOS,
            payload: respuesta.data
        });
    } catch (error) {
        console.log('error')
        dispatch({
            type: ERROR,
            payload: 'No se han podido cargar los usuarios'
        });  
    }
}

export const updateClient = (client) => async(dispatch) => {
    console.log('client', client);
    dispatch({
        type: CARGANDO
    });

    try {
        const request = await axios.put(`/api/clientes/${client.id}`, client);
        console.log('request', request)
        dispatch({
            type: UPDATE_CLIENT
        });
        
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'No se pudo actualizar el cliente'
        });  
    }
}

export const changueNameClient = (name) => (dispatch) => {
    dispatch({
        type: CHANGE_NAME_CLIENT,
        payload: name
    })
}

export const changueLastNameClient = (lastName) => (dispatch) => {
    dispatch({
        type: CHANGE_LAST_NAME_CLIENT,
        payload: lastName
    })
}

export const changuePhoneClient = (phone) => (dispatch) => {
    dispatch({
        type: CHANGE_PHONE_CLIENT,
        payload: phone
    })
}

export const changueEmailClient = (email) => (dispatch) => {
    dispatch({
        type: CHANGE_EMAIL_CLIENT,
        payload: email
    })
}

export const cleanAtribute = () => (dispatch) => {
    dispatch({
        type: CLEAN_ATRIBUTE
    })
}