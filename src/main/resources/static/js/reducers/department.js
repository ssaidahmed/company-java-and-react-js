import {SAVE_DEPARTMENT, DELETE_DEPARTMENT, UPDATE_DEPARTMENT, DEPARTMENT_DATA_SUCCESS} from '../constants/department';
const initialState={
  departments:[]
};
export function department(state=initialState, action){
    switch (action.type) {
        case DEPARTMENT_DATA_SUCCESS:
            return {...state, departments:action.payload};
        case DELETE_DEPARTMENT:
            return {...state, departments: [...state.departments.filter(item => item.id !== action.payload)]};
        case UPDATE_DEPARTMENT:
            let objUpdate = action.payload;

            return {...state, departments:[...state.departments.map((item) => {
                    if(item.id === objUpdate.id){
                        return objUpdate;
                    }
                    return item;

                } )]};
        case  SAVE_DEPARTMENT:
            return {...state, departments:[...state.departments, action.payload]};
    }
    return state;
}