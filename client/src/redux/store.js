import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";

import userReducer from "./reducers/user_reducer";
import usersReducer from "./reducers/users_reducer";
import productReducer from "./reducers/product_reducer";
import orderReducer from "./reducers/order_reducer";
import cartReducer from "./reducers/cart_reducer";

const saveToSessionStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem("online_Shopping_site_state", serializedState);
    } catch (error) {
        console.log(error);
    }
}

const loadFromSessionStorage = () => {
    try {
        let serializedState = sessionStorage.getItem("online_Shopping_site_state");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

const persistedState = loadFromSessionStorage();

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    products: productReducer,
    orders: orderReducer,
    cart: cartReducer
})

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(()=>{
    return saveToSessionStorage(store.getState());
});

export default store;

// const persistConfig = {
//     key: 'online_Shopping_site_state',
//     storage,
// }
   
// const persistedReducer = persistReducer(persistConfig, rootReducer)


// export const persistor = persistStore(store);
