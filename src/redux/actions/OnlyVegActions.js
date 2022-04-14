import ACTIONTYPES from "./ActionTypes";

export const updateOnlyVegPreference =  (onlyVeg) => ({
        type : ACTIONTYPES.UPDATE_ONLY_VEG_PREFERENCE,
        payload: {
            onlyVeg,
        },
    });
