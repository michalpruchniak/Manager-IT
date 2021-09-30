import axiosConfig from "../../config/axios";
import actions from "./actions";
const fetchUser = async () => {
    const response = await axiosConfig.get('api/user');
    const json = response.data;
    return json;
}
export const getUser = () =>
    async (dispatch) => {
        const user = await fetchUser()
       dispatch(actions.setUser(user));
    }