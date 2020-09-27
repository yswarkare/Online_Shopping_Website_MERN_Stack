import { Add_Product_To_Cart, Remove_Product_From_Cart, Set_Order_Details } from "../actions/action_types";
import cartState from "../states/cart_state";

const cartReducer = ( state= cartState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    
    switch (action.type) {

        case Add_Product_To_Cart:
            console.log(action.payload);
            stateCopy.products.push(action.payload);
            stateCopy.productIds.push(action.payload._id);
            console.log(stateCopy);
            return stateCopy;

        case Remove_Product_From_Cart:
            console.log(action.payload);
            stateCopy.products.splice(action.payload, 1);
            console.log(stateCopy);
            return stateCopy;

        case Set_Order_Details:
            console.log(action.payload);
            stateCopy.order.user = action.payload;
            stateCopy.order.products = stateCopy.productIds;
            let products_01 = stateCopy.products;
            let mrp = 0;
            let price = 0;
            let savings = 0;
            let deliveryCharge = 0;
            for (let i = 0; i < products_01.length; i++) {
                let productMRP = products_01[i].mrp.split(",").join("");
                let productPrice = products_01[i].price.split(",").join("");
                let productSaving = products_01[i].saving.split(",").join("");
                let pDeliveryCharge = products_01[i].deliveryCharge.split(",").join("");
                mrp = mrp + parseFloat(productMRP);
                price = price + parseFloat(productPrice);
                savings = savings + parseFloat(productSaving);
                deliveryCharge = deliveryCharge + parseFloat(pDeliveryCharge);
            }
            stateCopy.order.mrp = mrp;
            stateCopy.order.price = price;
            stateCopy.order.savings = savings;
            stateCopy.order.deliveryCharge = deliveryCharge;
            console.log(stateCopy);
            return stateCopy;

        default:
            return stateCopy;
    }
}

export default cartReducer;