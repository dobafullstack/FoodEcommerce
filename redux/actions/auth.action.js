import * as actionTypes from "../constants/auth.constant";
import axios from "axios";

export const login = (username, password) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/auth/login`, {
            username: username,
            password: password,
        });

        const decode = await axios.post("/auth/verifyToken", {
            token: data.accessToken,
        });

        const user = {
            username: decode.data.username,
            name: decode.data.name,
            email: decode.data.email,
            phone: decode.data.phone,
            resetLink: decode.data.resetLink,
            _id: decode.data._id,
            address: decode.data.address,
            image: decode.data.image,
        };

        dispatch({
            type: actionTypes.LOGIN_REQUIRED,
        });

        setTimeout(() => {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                payload: {
                    accessToken: data.accessToken,
                },
            });
            dispatch({
                type: actionTypes.VERIFY_TOKEN,
                payload: {
                    user
                }
            });
        }, 1500);
    } catch (error) {
        console.log(error);
        dispatch({
            type: actionTypes.LOGIN_FAILURE,
            payload: {
                message: error.message,
            },
        });
    }
};

export const register =
    (username, password, name) => async (dispatch, getState) => {
        try {
            const { data } = await axios.post(`/auth/register`, {
                username: username,
                password: password,
                name: name,
            });

            dispatch({
                type: actionTypes.REGISTER_REQUIRED,
            });

            setTimeout(() => {
                dispatch({
                    type: actionTypes.REGISTER_SUCCESS,
                });
            }, 1500);
        } catch (error) {
            dispatch({
                type: actionTypes.REGISTER_FAILURE,
                payload: {
                    message: error.message,
                },
            });
        }
    };

export const logout = () => (dispatch) => {
    dispatch({
        type: actionTypes.LOGOUT,
    });
};
