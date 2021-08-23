import * as actionTypes from "../constants/auth.constant";

export const login = (username, password) => (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/auth/login`, {
            username: username,
            password: password,
            name: name,
        });

        dispatch({
            type: actionTypes.LOGIN_REQUIRED,
        });

        setTimeout(() => {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                payload: {
                    user: data.user,
                    accessToken: data.accessToken
                }
            });
        }, 1500);
    } catch (error) {
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
            const { data } = await axios.get(`/auth/register`, {
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
