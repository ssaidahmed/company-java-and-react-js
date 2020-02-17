import {GET_EMPLOYEE, SAVE_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE, EMPLOYEE_DATA_SUCCESS} from '../constants/employee'




export function employeeFetchDataSuccess(data) {

    return{
        type:EMPLOYEE_DATA_SUCCESS,
        payload: data
    }
}

export function employeeFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response =>{
                if(!response.ok){
                    throw new  Error (response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(response => dispatch(employeeFetchDataSuccess(response)))
            .catch(error => {
                console.log("error", error);
            });
    }
}

export function deleteEmployee(url, id) {

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
export function saveEmployee(url, data) {
    return (dispatch) => {
        fetch(url,{
            method:'post',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(data)
        })
            .then(response =>{
                if(!response.ok){
                    throw new  Error (response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(response => dispatch({
                type:SAVE_EMPLOYEE,
                payload:response
            }))
    }
}
export function updateEmployee(url, data) {
    return (dispatch) => {
        fetch(url,{
            method:'put',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
            .then(response =>{
                if(!response.ok){
                    throw new  Error (response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(response => dispatch({
                type:UPDATE_EMPLOYEE,
                payload:response
            }))
    }
}
export function getEmployee(url) {
    return (dispatch) => {
        fetch(url)
            .then(response =>{
                if(!response.ok){
                    throw new  Error (response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(response => dispatch({
                type: GET_EMPLOYEE,
                payload: response
            }))
    }
}