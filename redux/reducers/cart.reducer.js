import * as actionTypes from "../constants/cart.constant";

const initialState = {
    products: [],
    totalPrice: 0,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                products: payload.products,
                totalPrice: payload.totalPrice,
            };
        case actionTypes.REMOVE_CART: 
            return{
                ...state,
                products: payload.products,
                totalPrice: payload.totalPrice
            }
        case actionTypes.UPDATE_CART: 
            return{
                ...state,
                products: payload.products,
                totalPrice: payload.totalPrice
            }

        default:
            return state;
    }
};
