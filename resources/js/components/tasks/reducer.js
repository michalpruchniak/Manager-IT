import types from '../../config/types'

const initialTasks = {
    name: 'tasks',
    list: []
}
function tasks(state = initialTasks, action) {
    switch (action.type) {
        case types.add_task:
            return {
                ...state,
                list: [...state.list, action.task]
            }
        default:
            return state
    }
}
export default tasks;