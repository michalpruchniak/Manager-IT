import types from "../../config/types"
const addUser = user => ({ type: types.add_user, user})

export default {
    addUser
}