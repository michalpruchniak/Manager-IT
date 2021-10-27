import types from "../../config/types"

const addTask = task => ({ type: types.add_task, task })
const completedTask = id => ({ type: types.completed_task, id })
const showAllTasks = () => ({ type: types.show_all_task })
const showUncompletedTasks = () => ({ type: types.show_uncompleted_task })
const showCompletedTasks = () => ({ type: types.show_completed_task })

export default {
    addTask,
    completedTask,
    showAllTasks,
    showUncompletedTasks,
    showCompletedTasks
}