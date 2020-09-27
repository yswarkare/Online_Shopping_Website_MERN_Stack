import { api } from "./axios_defaults";
import { Get_User_Orders, Place_Order, Get_Order_By_ID } from "./action_types";
import { Get_Error } from "./error_types"

export const getUserOrders = (user_id) => async (dispatch) => {
    try {
        let res = await api.get("/orders/get-user-orders", user_id);
        dispatch({
            type: Get_User_Orders,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: {error}
        })
    }
}

export const getOrderById = (order_id) => async (dispatch) => {
    try {
        let res = await api.get(`/orders/get-order/:${order_id}`);
        dispatch({
            type: Get_Order_By_ID,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: {error}
        })
    }
}

export const placeOrder = (order) => async (dispatch) => {
    try {
        let res = await api.post("/orders/place-order", order);
        dispatch({
            type: Place_Order,
            payload: res
        })
    } catch (error) {
        console.log({error});
        dispatch({
            type: Get_Error,
            payload: {error}
        })
    }
}