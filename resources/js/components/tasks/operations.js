import actions from "./actions";
import axiosConfig from '../../config/axios';
import { history } from "../history";
import displayToast from '../include/toast'

const fetchTasks  = async () => {
    const response = await axiosConfig.get('api/taks/all-tasks');
    const json = response.data;
    return json
}

export const toggleCompleted  = (id) => {
    return axiosConfig.get('api/taks/toggle-completed-task/' + id)
               .then(res => {
                  return res.data;
               }).catch(err => {
                   history.push('/login');

               })
}

export const getAllTasks = () =>
    async (dispatch) => {
        try{
            const tasks = await fetchTasks()
            tasks.map(task => dispatch(actions.addTask(task)))
        } catch(err) {
            history.push('/login');

        }
        
    }

export const storeTask = (addTaskToStore, taskInput) => {
    try {
        axiosConfig.post('api/taks/store-task', {
            name: taskInput.current.value,

        }).then((res) => {
            addTaskToStore(res.data);
            displayToast('success', 'Task został dodany poprawnie');
            taskInput.current.value = '';
        })
    } catch (err) {
        console.log(err)
    }
}