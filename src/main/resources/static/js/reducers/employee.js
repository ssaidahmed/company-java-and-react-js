import {GET_EMPLOYEE, SAVE_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE, EMPLOYEE_DATA_SUCCESS} from '../constants/employee'

const initialState={
    employees:[]
};
export function employee(state=initialState, action){

    switch (action.type) {
        case EMPLOYEE_DATA_SUCCESS:
            return {...state, employees:action.payload};
        case DELETE_EMPLOYEE:
            return {...state, employees:[...state.employees.filter(item => item.id !== action.payload)]};
        case UPDATE_EMPLOYEE:
            let objUpdate = action.payload;

            return {...state, employees:[...state.employees.map((item) => {
                if(item.id === objUpdate.id){
                    return objUpdate;
                }
                return item;

            } )]};
        case  SAVE_EMPLOYEE:
            return {...state, employees:[...state.employees, action.payload]};
    }
    return state;
}

