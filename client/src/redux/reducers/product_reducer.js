import { Get_All_Products, Get_Product } from "../actions/action_types";
import productState from "../states/product_state";

const productReducer = ( state = productState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {

        case Get_All_Products:
            console.log(action.payload);
            stateCopy.products = action.payload.data.products;
            console.log(stateCopy);
            return stateCopy;

        case Get_Product:
            console.log(action.payload);
            stateCopy.product = action.payload.data.product;
            console.log(stateCopy);
            return stateCopy;

        default:
            return stateCopy;
    }
}

export default productReducer;