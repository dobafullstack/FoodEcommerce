import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import cartReducer from "./reducers/cart.reducer";
import categoryReducer from "./reducers/category.reducer";
import foodReducer from "./reducers/food.reducer";
import authReducer from './reducers/auth.reducer'

const reducer = combineReducers({
    cart: cartReducer,
    category: categoryReducer,
    food: foodReducer,
    auth: authReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
