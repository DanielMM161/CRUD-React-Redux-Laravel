import axios from 'axios';
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

export const traerTodos = () => async(dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const respuesta = await axios.get('/api/clientes')
        dispatch({
            type: GET_ALL,
            payload: respuesta.data
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'No se han podido cargar los usuarios'
        });  
    }
}

export const updateClient = (client) => async(dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const request = await axios.put(`/api/clientes/${client.id}`, client);
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

export const addClient = (newClient) => async(dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const request = await axios.post(`/api/clientes/add`, newClient);
        dispatch({
            type: ADD_CLIENT
        });
        
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'No se pudo añadir el cliente'
        });  
    }
}

export const deleteClient = (id) => async(dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        await axios.delete(`/api/clientes/delete/${id}`);
        dispatch({
            type: UPDATE_CLIENT
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'No se pudo eliminar el cliente'
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

export const changueAddressClient = (address) => (dispatch) => {
    dispatch({
        type: CHANGE_ADDRESS_CLIENT,
        payload: address
    })
}

export const cleanAtribute = () => (dispatch) => {
    dispatch({
        type: CLEAN_ATRIBUTE
    })
}

export const prueba = () => (dispatch,getState) => {
    dispatch({
        type: PRUEBA
    })
}

export const prueba2 = () => (dispatch,getState) => {
    dispatch({
        type: PRUEBA2
    })
}