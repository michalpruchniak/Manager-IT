const addTask = task => ({ type: 'ADD_TASK', task })
const completedTask = id => ({ type: 'COMPLETED_TASK', id })

export default {
    addTask,
    completedTask
}