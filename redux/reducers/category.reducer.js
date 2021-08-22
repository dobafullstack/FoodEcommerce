import * as actionTypes from "../constants/category.constant";
const initialState = {
    isLoading: false,
    category: [],
    message: ""
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_CATEGORY_REQUIRED:
            return { ...state, isLoading: true };
        case actionTypes.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                category: payload.category,
            };
        case actionTypes.GET_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: payload.message,
            };

        default:
            return state;
    }
};
