import { Axios } from "./axios_defaults";
import { Get_All_Products, Get_Product } from "./action_types";
import { Get_Error } from "./error_types"

export const getAllProducts = () => async (dispatch) => {
    try {
        let res = await Axios.get("/products/get-all");
        dispatch({
            type: Get_All_Products,
            payload: res
        });
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: {error}
        })
    }
}

export const getProduct = (product_id) => async (dispatch) => {
    try {
        console.log("Get Product actions");
        let res = await Axios.get(`/products/get-product/${product_id}`);
        dispatch({
            type: Get_Product,
            payload: res
        });
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: {error}
        })
    }
}

