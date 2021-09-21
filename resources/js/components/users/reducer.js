import types from "../../config/types";
const initialUsers = {
    name: 'users',
    list: [{name: 'Bartek'}, {name: 'Marcin'}]
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