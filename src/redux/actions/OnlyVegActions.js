import ActionTypes from "./ActionTypes";

export const updateOnlyVegPreference =  (onlyVeg) => ({
        type : ActionTypes.UPDATE_ONLY_VEG_PREFERENCE,
        payload: {
            onlyVeg,
        },
    });
