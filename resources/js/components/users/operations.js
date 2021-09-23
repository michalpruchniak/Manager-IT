import axiosConfig from '../../config/axios';
import actions from './actions';

const fetchUsers = async () => {
    const response = await axiosConfig.get('api/users/all-users');
    const json = response.data;
    return json;
}

export const getAllUsers = () => 
    async (dispatch) => {
        const users = await fetchUsers()
        users.map(user => dispatch(actions.addUser(user)));

    }