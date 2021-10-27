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
               }).catch(() => {
                   history.push('/login');

               })
}

export const getAllTasks = () =>
    async (dispatch) => {
        try{
            const tasks = await fetchTasks()
            tasks.map(task => dispatch(actions.addTask(task)))
            dispatch(actions.showAllTasks());
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
            displayToast('error', err);

    }
}

export const markAsCompleted = (id) =>
    async (dispatch) => {
        try {
            const res = await toggleCompleted(id)
            if (res == 1) {
                    dispatch(actions.completedTask(id))
                    displayToast('success', 'Zmieniono status tasku')

            } else {
                displayToast('error', 'Nie masz uprawnień do zmiany statusu tasku')
            }
        } catch (err) {
            history.push('/login');

        }

    }