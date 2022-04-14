import ACTIONTYPES from "./ActionTypes";
import axios from "axios";
export const loadingActionCreator = () => {
    return {
        type : ACTIONTYPES.FETCH_RESTAURANT_REQUEST
    }
}

export const dataLoadedActionCreator = (data) => {
    return {
        type : ACTIONTYPES.FETCH_RESTAURANT_SUCCESS,
        payload : data
    }
}

export const dataLoadingErrorActionCreator = (error) => {
    return {
        type : ACTIONTYPES.FETCH_RESTAURANT_FAILURE,
        payload : error
    }
}

export const fetchRestaurant = () => {
    return (dispatch) => {
        dispatch(loadingActionCreator());
        axios.get('http://localhost:8000/menuData')
        .then(response => { 
            const restaurant = response.data[0];
            dispatch(dataLoadedActionCreator(restaurant));
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch( dataLoadingErrorActionCreator(errorMsg));
        })
    }
}