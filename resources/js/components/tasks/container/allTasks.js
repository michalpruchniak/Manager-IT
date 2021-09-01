import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import actions from '../actions';
import { toggleCompleted  } from '../operations';
import Login from '../../auth/login';


import { getAllTasks } from '../operations';

const TasksContainer = ({ tasks, getAllTasks, toggleMarksAsCompleted }) => {
    useEffect(() => { getAllTasks() }, [])
    const markAsCompleted = (id) => {
        toggleMarksAsCompleted(id);
        toggleCompleted(id);

    }
    return( 
    <React.Fragment>
    <Login />
    <ul>
        {tasks.list.map(task =>
            <li key={task.id} className={task.completed ? 'activeTask' : 'completeTask'}
             onClick={() => markAsCompleted(task.id)}>{task.name}</li>
        )}
    </ul>
    </React.Fragment>
    )
}
const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    getAllTasks: () => dispatch(getAllTasks()),
    toggleMarksAsCompleted: (id) => dispatch(actions.completedTask(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)