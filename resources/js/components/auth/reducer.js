import types from "../../config/types";

const initialUser = {
    name: 'User',
    user:{}
};

function user(state=initialUser, action){
    switch (action.type){
        case types.set_user:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default user;