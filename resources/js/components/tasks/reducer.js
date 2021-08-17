const initialTasks = {
    name: 'tasks',
    list: []
}
function tasks(state = initialTasks, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                list: [...state.list, action.task]
            }
        default:
            return state
    }
}
export default tasks;