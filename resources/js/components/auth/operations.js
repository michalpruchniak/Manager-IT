import axiosConfig from "../../config/axios";
import actions from "./actions";
import { history } from "../history";


const fetchUser = async () => {
    try {
        const response = await axiosConfig.get('api/userdetails');
        return response.data;
    } catch (error) {
            history.push('/login');
    }
}

export const getUser = () => async (dispatch) => {
    try {
        const user = await fetchUser();
        dispatch(actions.setUser(user));
    } catch(err) {
        history.push('/login');
    }
}