import * as actionTypes from "../constants/food.constant";

const initialState = {
    isLoading: false,
    foods: [],
    food_detail: {},
    message: "",
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_FOOD_REQUIRED:
            return { ...state, isLoading: true, foods: [] };
        case actionTypes.GET_FOOD_SUCCESS:
            return { ...state, isLoading: false, foods: payload.foods };
        case actionTypes.GET_FOOD_FAILURE:
            return { ...state, isLoading: false, message: payload.message };
        case actionTypes.GET_FOOD_DETAIL_REQUIRED:
            return { ...state, isLoading: true };
        case actionTypes.GET_FOOD_DETAIL_SUCCESS:
            return { ...state, isLoading: false, food_detail: payload.foods };
        case actionTypes.GET_FOOD_DETAIL_FAILURE:
            return { ...state, isLoading: false, message: payload.message };
        default:
            return state;
    }
};
