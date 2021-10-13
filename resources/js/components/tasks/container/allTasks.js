import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import actions from '../actions';
import { toggleCompleted  } from '../operations';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddTask from './addTask';

import { getAllTasks } from '../operations';

const TasksContainer = ({ tasks, getAllTasks, toggleMarksAsCompleted, user }) => {
    useEffect(() => { 
        try {
            getAllTasks();

        } catch(err){
            history.pushState
        }
     }, [])
    const markAsCompleted = async (id) => {
        const res = await toggleCompleted(id)
        if (res == 1){
            toggleMarksAsCompleted(id);
            toast.success('Zmieniono status tasku', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error('Nie masz uprawnień do zmiany statusu tego tasku', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
       

    }
    return( 
    <React.Fragment>
    <ul className="tasks">
        {tasks.list.map(task =>
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
    toggleMarksAsCompleted: (id) => dispatch(actions.completedTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)