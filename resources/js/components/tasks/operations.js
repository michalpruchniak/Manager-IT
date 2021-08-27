import actions from "./actions";

const fetchTasks  = async () => {
    const response = await fetch('http://localhost:8000/api/taks/all-tasks', { method: 'GET' })
    const json = await response.json()

    return json
}

export const getAllTasks = () =>
    async (dispatch) => {
        const tasks = await fetchTasks()
        tasks.map(task => dispatch(actions.addTask(task)))
    }

