import * as actionTypes from "../constants/auth.constant";

const initialState = {
    isLogin: false,
    user: {},
    message: "",
    isLoading: false,
    accessToken: ""
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.REGISTER_REQUIRED:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: "Register successful!",
            };
        case actionTypes.REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: payload.message
            };

        case actionTypes.LOGIN_REQUIRED:
            return {
                ...state,
                isLoading: true,
                message: ""
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload.user,
                accessToken: payload.accessToken
            };
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: payload.message
            };

        default:
            return state;
    }
};
