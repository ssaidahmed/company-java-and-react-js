import {SAVE_DEPARTMENT, DELETE_DEPARTMENT, UPDATE_DEPARTMENT, DEPARTMENT_DATA_SUCCESS} from '../constants/department';
const initialState={
  departments:[]
};
export function department(state=initialState, action){
    switch (action.type) {
        case DEPARTMENT_DATA_SUCCESS:
            return {...state, departments:action.payload};
        case DELETE_DEPARTMENT:
            return {...state, departments: state.departments.filter(item => item.id !== payload)};
        case UPDATE_DEPARTMENT:
            return {...state, departments:[...state.departments, action.payload]};
        case  SAVE_DEPARTMENT:
            return {...state, departments:[...state.departments, action.payload]};
    }
    return state;
}