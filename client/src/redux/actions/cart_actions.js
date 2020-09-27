import { api } from "./axios_defaults";
import { Add_Product_To_Cart, Remove_Product_From_Cart, Proceed_To_Checkout, Set_Order_Details } from "./action_types";
import { Get_Error } from "./error_types"

export const addProductToCart = (productInfo) => async (dispatch) => {
    try {
        await dispatch({
            type: Add_Product_To_Cart,
            payload: productInfo.product
        });
        await dispatch({
            type: Set_Order_Details,
            payload: productInfo.user_id
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: {error}
        });
    }
}

export const removeProductFromCart = (productInfo) => async (dispatch) => {
    try {
        await dispatch({
            type: Remove_Product_From_Cart,
            payload: productInfo.index
        });
        await dispatch({
            type: Set_Order_Details,
            payload: productInfo.user_id
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: {error}
        });
    }
}

export const proceedToCheckout = (product) => async (dispatch) => {
    try {
        dispatch({
            type: Proceed_To_Checkout,
            payload: product
        });
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: {error}
        });
    }
}

