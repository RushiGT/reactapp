import ActionTypes from "./ActionTypes";
import axios from "axios";
export const fetchMenuRequest = () => {
    return {
        type : ActionTypes.FETCH_MENU_REQUEST
    }
}

export const fetchMenuSuccess = (data) => {
    return {
        type : ActionTypes.FETCH_MENU_SUCCESS,
        payload : data
    }
}

export const fetchMenuFailure = (error) => {
    return {
        type : ActionTypes.FETCH_MENU_FAILURE,
        payload : error
    }
}

export const fetchMenu = () => {
    return (dispatch) => {
        dispatch(fetchMenuRequest());
        axios.get('http://localhost:8000/menuData')
        .then(response => { 
            const Menu = response.data[0];
            dispatch(fetchMenuSuccess(Menu));
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch(fetchMenuFailure(error));
        })
    }
}