import axios from 'axios'
import axiosConfig from "../../config/axios";
import actions from "./actions";
import { history } from "../history";
import { url } from '../../components/default'


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


export const rediredLoggedUser = async () => {
        const user = await fetchUser();
        if(user){
            history.push('/all-tasks')
        } 
    } 