import * as actionTypes from "../constants/cart.constant";

export const addToCart = (product) => (dispatch, getState) => {
    const products = getState().cart.products;
    let totalPrice = getState().cart.totalPrice;

    if (products.length !== 0) {
        //cart is not null
        const index = products.findIndex(
            (item) => item.product._id === product._id
        );

        if (index !== -1) {
            //product exist in cart
            let newProducts = [...products];
            newProducts[index].count = newProducts[index].count + 1;
            dispatch({
                type: actionTypes.ADD_TO_CART,
                payload: {
                    products: newProducts,
                    totalPrice: totalPrice + product.price,
                },
            });
        } else {
            products.push({
                product: product,
                count: 1,
            });
            dispatch({
                type: actionTypes.ADD_TO_CART,
                payload: {
                    products: products,
                    totalPrice: totalPrice + product.price,
                },
            });
        }
    } else {
        products.push({
            product: product,
            count: 1,
        });
        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: {
                products: products,
                totalPrice: totalPrice + product.price,
            },
        });
    }
};

export const removeCart = (product) => async (dispatch, getState) => {
    let products = getState().cart.products;
    let totalPrice = getState().cart.totalPrice;

    totalPrice = totalPrice - product.product.price * product.count;
    products = products.filter(
        (item) => item.product._id !== product.product._id
    );

    dispatch({
        type: actionTypes.REMOVE_CART,
        payload: {
            products: products,
            totalPrice: totalPrice,
        },
    });
};

export const updateCart = (product, count) => async (dispatch, getState) => {
    let products = getState().cart.products;
    let totalPrice = getState().cart.totalPrice;

    const index = products.findIndex(
        (item) => item.product._id === product.product._id
    );

    if (count > 0) {
        products[index].count += count;
        totalPrice = totalPrice + product.product.price;
    } else {
        if (product.count === 1) {
            return;
        }
        products[index].count = products[index].count + count;
        totalPrice = totalPrice - product.product.price;
    }

    dispatch({
        type: actionTypes.UPDATE_CART,
        payload: {
            products: products,
            totalPrice: totalPrice,
        },
    });
};
