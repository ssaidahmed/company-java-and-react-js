import {SAVE_PROFESSION, DELETE_PROFESSION, UPDATE_PROFESSION, PROFESSION_DATA_SUCCESS} from '../constants/profession';


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
                type:DELETE_PROFESSION,
                payload: id,
            }))
    }
}
export function saveProfession(url, data) {
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
                type:SAVE_PROFESSION,
                payload:response
            }))
    }
}
export function updateProfession(url, data) {
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
                type:UPDATE_PROFESSION,
                payload:response
            }))
    }
}
