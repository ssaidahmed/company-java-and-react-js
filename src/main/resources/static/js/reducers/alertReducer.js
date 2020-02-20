import {HIDE_ALERT, SHOW_ALERT} from '../constants/alert';
const initialState={
    alert:{
        variant:'',
        visible:false,
        text:'',
        type:'',

    }
};

export function alert(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, alert:action.payload};
        case HIDE_ALERT:
            return {...state, alert:{...state.alert, visible:false}};

    }
    return state;
}