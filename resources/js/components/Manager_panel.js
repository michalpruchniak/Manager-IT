import React from 'react';

import { ToastContainer } from 'react-toastify';
import Alltasks from './tasks/container/allTasks';
import AllUsers from './users/container/allUsers';
import { getUser } from './auth/operations';
import Login from './auth/container/login';
import {connect } from 'react-redux';
import { history } from './history';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";


const Manager = ({ getUser, user }) => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <div className="card-body">
                            <Router history={history}>
                                <Switch>
                                    <Route path="/login">
                                        <Login />
                                    </Route>
                                        <Route path="/all-tasks">
                                            <Alltasks />
                                        </Route>
                                        <Route path="/all-users">
                                            <AllUsers />
                                        </Route>

                                </Switch>
                            </Router>
                            <ToastContainer />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getUser())
})

export default connect(null, mapDispatchToProps)(Manager)