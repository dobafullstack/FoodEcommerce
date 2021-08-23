import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistStore, persistReducer} from 'redux-persist';

import cartReducer from "./reducers/cart.reducer";
import categoryReducer from "./reducers/category.reducer";
import foodReducer from "./reducers/food.reducer";
import authReducer from './reducers/auth.reducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['cart', 'auth', 'category']
}

const reducer = combineReducers({
    cart: cartReducer,
    category: categoryReducer,
    food: foodReducer,
    auth: authReducer,
});

const middleware = [thunk];

const rootReducer = persistReducer(persistConfig, reducer)

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store)

export default store;

