import React from 'react'
import actions from '../actions';
import { connect } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css'
import { storeTask } from '../operations';

const addTask =  (props) => {
    const taskInput = React.createRef();
    const submitAddTaskForm = (event) => {
        event.preventDefault();
        storeTask(props.add, taskInput);

    }
    return <div className="form-group">
        <form onSubmit={submitAddTaskForm}>
                    <input 
                        className="form-control"
                        ref={taskInput}
                    />
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >Dodaj task</button>
                </form>
            </div>
}

const mapDispatchToProps = dispatch => ({
    add: task => dispatch(actions.addTask(task)),
})

export default connect(null, mapDispatchToProps)(addTask)