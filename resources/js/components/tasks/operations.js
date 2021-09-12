import actions from "./actions";
import axiosConfig from '../../config/axios';


const fetchTasks  = async () => {
    const response = await fetch('http://localhost:8000/api/taks/all-tasks', { 
        method: 'GET',
        headers: {
            'Authorization': window.localStorage.getItem('Authorization')
        }

     })
    const json = await response.json()

    return json
}

export const toggleCompleted  = (id) => {
    return axiosConfig.get('api/taks/toggle-completed-task/' + id)
               .then(res => {
                  return res.data;
               }).catch(error => {
                   return error;
               })
}

export const getAllTasks = () =>
    async (dispatch) => {
        const tasks = await fetchTasks()
        tasks.map(task => dispatch(actions.addTask(task)))
    }

