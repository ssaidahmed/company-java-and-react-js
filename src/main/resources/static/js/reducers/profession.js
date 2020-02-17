import {SAVE_PROFESSION, DELETE_PROFESSION, UPDATE_PROFESSION, PROFESSION_DATA_SUCCESS} from '../constants/profession';


const initialState={
    professions:[]
};
export function profession(state=initialState, action){
    switch (action.type) {
        case PROFESSION_DATA_SUCCESS:
            return {...state, professions:action.payload};
        case DELETE_PROFESSION:
            return {...state, professions:[...state.professions.filter(item => item.id !== action.payload)]};
        case UPDATE_PROFESSION:
            let objUpdate = action.payload;

            return {...state, professions:[...state.professions.map((item) => {
                    if(item.id === objUpdate.id){
                        return objUpdate;
                    }
                    return item;

                } )]};
        case  SAVE_PROFESSION:
            return {...state, professions:[...state.professions, action.payload]};
    }
    return state;
}