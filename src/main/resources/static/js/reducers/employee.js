import {GET_EMPLOYEE, SAVE_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE, EMPLOYEE_DATA_SUCCESS} from '../constants/employee'

const initialState={
    employees:[]
};
export function employee(state=initialState, action){

    switch (action.type) {
        case EMPLOYEE_DATA_SUCCESS:
            return {...state, employees:action.payload};
        case DELETE_EMPLOYEE:
            return {...state, employees: state.employees.filter(item => item.id !== payload)};
        case UPDATE_EMPLOYEE:
            return {...state, employees:[...state.employees, action.payload]};
        case  SAVE_EMPLOYEE:
            return {...state, employees:[...state.employees, action.payload]};
    }
    return state;
}

