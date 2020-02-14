import {combineReducers} from "redux";
import {department} from './department'
import {profession} from './profession'
import {employee} from './employee'

const rootReducers = combineReducers({
    department,
    profession,
    employee

});
export default rootReducers;