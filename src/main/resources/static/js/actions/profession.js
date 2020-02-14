import {SAVE_PROFESSION, DELETE_PROFESSION, UPDATE_PROFESSION, PROFESSION_DATA_SUCCESS} from '../constants/profession';
import {DELETE_EMPLOYEE, GET_EMPLOYEE, SAVE_EMPLOYEE, UPDATE_EMPLOYEE} from "../constants/employee";

export function professionFetchDataSuccess(response) {
    return{
        type:PROFESSION_DATA_SUCCESS,
        payload: response
    }
}

export function professionFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response =>{
                if(!response.ok){
                    throw new  Error (response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(response => dispatch(professionFetchDataSuccess(response)))
            .catch(error => {
                console.log("error", error);
            });
    }
}
export function deleteProfession(url, id) {

    return (dispatch) => {
        fetch(url, {
            method: 'delete'
        })
            .then(response =>{
                if(!response.ok){
                    throw new  Error (response.statusText)
                }
                return response;
            })
            .then(() => dispatch({
                type:DELETE_EMPLOYEE,
                payload: id,
            }))
    }
}
export function saveProfession(url, data) {
    return (dispatch) => {
        fetch(url)
            .then(response =>{
                if(!response.ok){
                    throw new  Error (response.statusText)
                }
                return response;
            })
            .then(response => dispatch({
                type:SAVE_EMPLOYEE,
                payload:response
            }))
    }
}
export function updateProfession(url, data) {
    return (dispatch) => {
        fetch(url)
            .then(response =>{
                if(!response.ok){
                    throw new  Error (response.statusText)
                }
                return response;
            })
            .then(response => dispatch({
                type:UPDATE_EMPLOYEE,
                payload:response
            }))
    }
}
export function getProfession(url) {
    return (dispatch) => {
        fetch(url)
            .then(response =>{
                if(!response.ok){
                    throw new  Error (response.statusText)
                }
                return response;
            })
            .then(response => dispatch({
                type: GET_EMPLOYEE,
                payload: response
            }))
    }
}