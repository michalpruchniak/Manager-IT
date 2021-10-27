import types from '../../config/types'

const initialTasks = {
    name: 'tasks',
    list: [],
    filtered: []
}
function tasks(state = initialTasks, action) {
    switch (action.type) {
        case types.add_task:
            return {
                ...state,
                list: [...state.list, action.task],
                filtered: [...state.filtered, action.task]
            }

        case types.completed_task:
            return {
                ...state,
                filtered: state.filtered.map(todo =>
                    (todo.id === action.id )
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
                list: state.list.map(todo =>
                    (todo.id === action.id )
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            }
            case types.show_all_task:
                return {
                    ...state,
                    filtered: state.list.map(todo => todo)
                }
            case types.show_completed_task:
                return {
                    ...state,
                    filtered: state.list.filter(todo => todo.completed === 1 || todo.completed === true)
                }
            case types.show_uncompleted_task:
                return {
                    ...state,
                    filtered: state.list.filter(todo => todo.completed === 0 || todo.completed === false)
                }
        default:
            return state
    } 
}
export default tasks;