import ActionTypes from "./ActionTypes";

export const add =  (item) => {
return {
    type : ActionTypes.ADD,
    item : item
};
}

export const reduce = (item) => {
    return {
        type : ActionTypes.REDUCE,
        item : item
    };
}
