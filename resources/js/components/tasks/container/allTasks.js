import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { getAllTasks } from '../operations';

const TasksContainer = ({ tasks, getAllTasks }) => {
    useEffect(() => { getAllTasks() }, [])
    return <ul>
        {tasks.list.map(task =>
            <li key={task.id}>{task.name}</li>
        )}
    </ul>
}
const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    getAllTasks: () => dispatch(getAllTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)