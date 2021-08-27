import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import actions from '../actions';

import { getAllTasks } from '../operations';

const TasksContainer = ({ tasks, getAllTasks, markAsCompleted }) => {
    useEffect(() => { getAllTasks() }, [])
    return <ul>
        {tasks.list.map(task =>
            <li key={task.id} className={task.completed ? 'activeTask' : 'completeTask'}
             onClick={() => markAsCompleted(task.id)}>{task.name} ({task.completed})</li>
        )}
    </ul>
}
const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    getAllTasks: () => dispatch(getAllTasks()),
    markAsCompleted: (id) => dispatch(actions.completedTask(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)