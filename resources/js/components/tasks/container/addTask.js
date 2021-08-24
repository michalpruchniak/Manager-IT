import React from 'react'
import actions from '../actions';
import { connect } from 'react-redux'

const addTask = (props) => {
    const taskInput = React.createRef();
    const storeTask = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/taks/store-task', {
            name: taskInput.current.value
        },{
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        }).then((res) => {
            console.log(res);
            props.add(res.data)
            console.log(res.data);
            taskInput.current.value = '';
        })
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