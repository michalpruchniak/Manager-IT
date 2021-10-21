import axiosConfig from '../../config/axios';
import actions from './actions';
import { history } from '../history';

import displayToast from '../include/toast'

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
            case '1':
                role = 1
            break;
            case '2':
                role = 2
            break;
            case '3':
                role = 3
            break;
            default:
                role = 1
            break;
        }
        const response = await axiosConfig.get('api/users/admin/change-role/' + role + '/' + userID);
    } catch(err) {

    }
}

export const storeUser = (addUserToStore, data, e) => {
    axiosConfig.post('api/users/store-user', {
        name: data.name,
        email: data.email,
        password: data.password,
    }).then((res) => {
        addUserToStore(res.data);
        displayToast('success', 'User został dodany poprawnie');
        e.target.reset();

    }).catch((error) => {
        if (error.response.data.errors) {
            for (let klucz in error.response.data.errors) {
                displayToast('error', `${error.response.data.errors[klucz]}`);
            }
        }
    });
}