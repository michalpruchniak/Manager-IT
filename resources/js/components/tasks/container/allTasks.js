import React from 'react'
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css'
import AddTask from './addTask';
import FilterTasks from './filterTasks';
import { getAllTasks, markAsCompleted } from '../operations';

const TasksContainer = ({
        tasks,
        getAllTasks,
        markAsCompleted,
        user
    }) => {
    try {
        if(tasks.list.length < 1) {
            getAllTasks();
        }
    } catch(err) {
        history.pushState
    }

    return( 
    <React.Fragment>
    <FilterTasks />
    <ul className="tasks">
        {tasks.filtered.map(task =>
            <li key={task.id} className={!task.completed ? 'activeTask' : 'completeTask'}
                onClick={() => markAsCompleted(task.id)}>{task.name} {(task.user_id === user.user.id) ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}</li>
        )}
    </ul>
    <AddTask />
    </React.Fragment>
    )
}
const mapStateToProps = state => ({
    tasks: state.tasks,
    user: state.user,
})

const mapDispatchToProps = dispatch => ({
    getAllTasks: () => dispatch(getAllTasks()),
    markAsCompleted: (id) => dispatch(markAsCompleted(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)