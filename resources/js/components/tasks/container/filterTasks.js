import React from 'react';
import actions from '../actions';
import { connect } from 'react-redux';

const FilterTasks = ({
    showAllTasks,
    showCompletedTasks,
    showUncompletedTasks,
}) => {
    return(
        <React.Fragment>
            <span onClick={showUncompletedTasks}>Aktywne taski | </span>
            <span onClick={showCompletedTasks}>Zakończone taski | </span>
            <span onClick={showAllTasks}>Wszystkie taski</span>
        </React.Fragment>
    );
}
const mapDispatchToProps = dispatch => ({
    showAllTasks: () => dispatch(actions.showAllTasks()),
    showCompletedTasks: () => dispatch(actions.showCompletedTasks()),
    showUncompletedTasks: () => dispatch(actions.showUncompletedTasks()),
    markAsCompleted: (id) => dispatch(markAsCompleted(id))

})
export default connect(null, mapDispatchToProps)(FilterTasks);
