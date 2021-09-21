import types from "../../config/types"

const addTask = task => ({ type: types.add_task, task })
const completedTask = id => ({ type: types.completed_task, id })

export default {
    addTask,
    completedTask
}