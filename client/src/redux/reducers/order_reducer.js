import { Get_User_Orders, Get_Order_By_ID, Place_Order } from "../actions/action_types";
import orderState from "../states/order_state";

const orderReducer = ( state = orderState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {

        case Get_User_Orders:
            console.log(action.payload);
            let orders_01 = action.payload.data.orders;
            for (let i = 0; i < orders_01.length; i++) {
                let createdAt = new Date(orders_01[i].createdAt);
                orders_01[i].createdAt = createdAt.toLocaleString();
                console.log("date created at => "+ orders_01[i].createdAt)
            }
            stateCopy.orders = orders_01;
            console.log(stateCopy);
            return stateCopy;

        case Get_Order_By_ID:
            console.log(action.payload);
            stateCopy.order = action.payload.data.order;
            console.log(stateCopy);
            return stateCopy;

        case Place_Order:
            console.log(action.payload);
            stateCopy.order = action.payload.data.order;
            console.log(stateCopy);
            return stateCopy;

        default:
            return stateCopy;
    }
}

export default orderReducer;