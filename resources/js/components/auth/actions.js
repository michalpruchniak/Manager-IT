import types from "../../config/types"

const setUser = user => ({ type: types.set_user, user })

export default {
    setUser
}