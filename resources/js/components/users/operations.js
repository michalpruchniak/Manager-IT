import axiosConfig from '../../config/axios';
import actions from './actions';
import { history } from '../history';

const fetchUsers = async () => {
    const response = await axiosConfig.get('api/users/all-users');
    const json = response.data;
    return json;
}

export const getAllUsers = () => 
    async (dispatch) => {
        try {
            const users = await fetchUsers()
            users.map(user => dispatch(actions.addUser(user)));
        } catch(err) {
            history.push('/home/#/login');

        }
        

    }

export const changeUserRole = async (role, userID) =>{
    try {
        switch(role){
            case 'user':
                role = 1
            break;
            case 'moderator':
                role = 2
            break;
            default:
                role = 1
            break;
        }
        const response = await axiosConfig.get('api/users/admin/change-role/' + role + '/' + userID);
    } catch(err) {

    }
}