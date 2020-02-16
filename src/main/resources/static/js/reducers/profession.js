import {SAVE_PROFESSION, DELETE_PROFESSION, UPDATE_PROFESSION, PROFESSION_DATA_SUCCESS} from '../constants/profession';


const initialState={
    professions:[]
};
export function profession(state=initialState, action){
    switch (action.type) {
        case PROFESSION_DATA_SUCCESS:
            return {...state, professions:action.payload};
        case DELETE_PROFESSION:
            return {...state, professions: state.profession.professions.filter(item => item.id !== payload)};
        case UPDATE_PROFESSION:
            return {...state, professions:[...state.profession.professions, action.payload]};
        case  SAVE_PROFESSION:
            return {...state, professions:[...state.profession.professions, action.payload]};
    }
    return state;
}