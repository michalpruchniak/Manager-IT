import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import actions from '../actions';
import 'react-toastify/dist/ReactToastify.css'
import AddTask from './addTask';

import { getAllTasks, markAsCompleted } from '../operations';

const TasksContainer = ({
        tasks,
        getAllTasks,
        markAsCompleted,
        showAllTasks,
        showCompletedTasks,
        showUncompletedTasks,
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
    <span onClick={showUncompletedTasks}>Aktywne taski | </span>
    <span onClick={showCompletedTasks}>Zakończone taski | </span>
    <span onClick={showAllTasks}>Wszystkie taski</span>
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
    showAllTasks: () => dispatch(actions.showAllTasks()),
    showCompletedTasks: () => dispatch(actions.showCompletedTasks()),
    showUncompletedTasks: () => dispatch(actions.showUncompletedTasks()),
    markAsCompleted: (id) => dispatch(markAsCompleted(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)