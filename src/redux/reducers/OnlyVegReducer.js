import ActionTypes from "../actions/ActionTypes";
const initialState = false ;
const onlyVegReducer = (currentState = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.UPDATE_ONLY_VEG_PREFERENCE :
            const { onlyVeg } = payload;
            return onlyVeg;
        default:
            return currentState;
    }
}

export default onlyVegReducer;