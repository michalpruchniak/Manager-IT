import React from 'react'
import actions from '../actions';
import { connect } from 'react-redux'
import axiosConfig from '../../../config/axios';
import ToastConfig from '../../../config/toast';

const addTask = (props) => {
    const taskInput = React.createRef();
    const storeTask = (event) => {
        event.preventDefault();
        try {
            axiosConfig.post('api/taks/store-task', {
                name: taskInput.current.value,
  
            }).then((res) => {
                props.add(res.data)
                ToastConfig('success', 'Task został dodany');
                
                taskInput.current.value = '';
            })
        } catch(err) {
            console.log(err)
        }

    }
    return <form onSubmit={storeTask}>
        <input ref={taskInput} />
        <button type="submit">Dodaj task</button>
    </form>
}

const mapDispatchToProps = dispatch => ({
    add: task => dispatch(actions.addTask(task)),
})

export default connect(null, mapDispatchToProps)(addTask)