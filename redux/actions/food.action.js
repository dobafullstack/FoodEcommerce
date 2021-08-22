import * as actionTypes from "../constants/food.constant";
import axios from "axios";

export const getFoodByCateId = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/foods/${id}`);

        dispatch({ type: actionTypes.GET_FOOD_REQUIRED });

        setTimeout(() => {
            dispatch({
                type: actionTypes.GET_FOOD_SUCCESS,
                payload: { foods: data },
            });
        }, 1500);
    } catch (error) {
        dispatch({
            type: actionTypes.GET_FOOD_FAILURE,
            payload: {
                message: error.message,
            },
        });
    }
};

export const getFoodDetail = (id) => async (dispatch, getState) => {
    try {
        const { data } = axios.get(`/foods/detail/${id}`);

        dispatch({ type: actionTypes.GET_FOOD_DETAIL_REQUIRED });

        setTimeout(() => {
            dispatch({
                type: actionTypes.GET_FOOD_DETAIL_SUCCESS,
                payload: { food_detail: data },
            });
        }, 1500);
    } catch (error) {
        dispatch({
            type: actionTypes.GET_FOOD_DETAIL_FAILURE,
            payload: { message: error.message },
        });
    }
};
