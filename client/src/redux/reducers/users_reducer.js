import { Get_Error } from "../actions/error_types";
import usersState from "../states/users_state";

const usersReducer = (state = usersState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        
        case Get_Error:
            console.log(action.payload);
            return stateCopy;

        default:
            return stateCopy;
    }
}

export default usersReducer;