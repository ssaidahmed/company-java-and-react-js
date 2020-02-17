
import {SAVE_DEPARTMENT, DELETE_DEPARTMENT, UPDATE_DEPARTMENT, DEPARTMENT_DATA_SUCCESS} from '../constants/department'

export function departmentFetchDataSuccess(response) {
    return{
        type:'DEPARTMENT_DATA_SUCCESS',
        payload: response
    }
}

export function departmentFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response =>{
                if(!response.ok){
                    throw new  Error (response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(response => dispatch(departmentFetchDataSuccess(response)))
            .catch(error => {
                console.log("error", error);
            });
    }
}
export function deleteDepartment(url) {
    return (dispatch) => {
        fetch(url,{
            method: 'delete'
        })
            .then(response =>{
                if(!response.ok){
                    throw new  Error (response.statusText)
                }
                return response;
            })
            .then(() => dispatch({
                type:'DELETE_DEPARTMENT',
                payload: id,
            }))
    }
}
export function saveDepartment(url, data) {
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
                type:SAVE_DEPARTMENT,
                payload:response
            })).catch(error => {
             console.log("error", error);
        });
    }
}
export function updateDepartment(url, data) {
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
                type:UPDATE_DEPARTMENT,
                payload:response
            })).catch(error => {
             console.log("error", error);
        });
    }
}