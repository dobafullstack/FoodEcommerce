import * as actionTypes from "../constants/category.constant";
import axios from "axios";

export const getCategories = (payload) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/categories");

        dispatch({ type: actionTypes.GET_CATEGORY_REQUIRED });

        setTimeout(() => {
            dispatch({
                type: actionTypes.GET_CATEGORY_SUCCESS,
                payload: { category: data },
            });
        }, 1500);
    } catch (err) {
        dispatch({
            type: actionTypes.GET_CATEGORY_FAILURE,
            payload: {
                message: err.message,
            },
        });
    }
};
