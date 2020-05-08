import { CARGANDO, AGREGAR, BORRAR, ACTUALIZAR, TRAER_TODOS, ERROR } from '../types/clientesTypes';

const INITIAL_STATE = {
    clientes: [],
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

    default: return state;
    }
}