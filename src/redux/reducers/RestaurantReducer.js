import ACTIONTYPES from "../actions/ActionTypes";
const initialState = {
    loading : false,
    data : {},
    error : ``

}
const restaurantReducer = (state = initialState,action) =>  {
    switch (action.type) {
        case ACTIONTYPES.FETCH_RESTAURANT_REQUEST:
            return {
                ...state,
                loading : true
            }
        case ACTIONTYPES.FETCH_RESTAURANT_SUCCESS:
            return {
                loading : false,
                data : action.payload,
                error : ``
            }
        case ACTIONTYPES.FETCH_RESTAURANT_FAILURE:
            return {
                loading : false,
                data : {},
                error : action.payload
            }
        default:
            return state; 
    }
}
export default restaurantReducer;