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

        case 'COMPLETED_TASK':
            return {
                ...state,
                list: state.list.map(todo =>
                    (todo.id === action.id)
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            }
        default:
            return state
    } 
}
export default tasks;