import types from "../../config/types";
const initialUsers = {
    name: 'users',
    list: [{name: 'Bartek', email: 'bartek@gmail.com'}, {name: 'Marcin', email: "marcin@gmail.com"}]
};


function users(state=initialUsers, action) {
    switch(action.type){
        case types.add_user: {
            return {
                ...state,
                list: [...state.list, action.user]
            }
        }
        default:
            return state 
    }
}

export default users