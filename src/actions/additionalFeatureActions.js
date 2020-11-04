export const ADD_ADDITIONAL_FEATURE = "ADD_ADDITIONAL_FEATURE";
export const REMOVE_ADDITIONAL_FEATURE = "REMOVE_ADDITIONAL_FEATURE";

export const addFeature = (item) => {
    return { type: ADD_ADDITIONAL_FEATURE, payload: item };
}

export const removeFeature = (item) => {
    return { type: REMOVE_ADDITIONAL_FEATURE, payload: item}
}
