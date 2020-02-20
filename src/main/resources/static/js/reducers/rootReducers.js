import {combineReducers} from "redux";
import {department} from './department'
import {profession} from './profession'
import {employee} from './employee'
import {alert} from './alertReducer'

const rootReducers = combineReducers({
    department,
    profession,
    employee,
    alert

});
export default rootReducers;