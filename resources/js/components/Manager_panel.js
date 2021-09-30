import React, { useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import AuthProvider from './AuthProvider';
import Alltasks from './tasks/container/allTasks';
import AllUsers from './users/container/allUsers';

import Login from './auth/container/login';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const Manager = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <div className="card-body">
                            <Router>
                                <Switch>
                                    <Route path="/login">
                                        <Login />
                                    </Route>
                                    <AuthProvider>
                                        <Route path="/all-tasks">
                                            <Alltasks />
                                        </Route>
                                        <Route path="/all-users">
                                            <AllUsers />
                                        </Route>

                                        <Route path="/">
                                            <Redirect to="/all-tasks" />
                                        </Route>
                                    </AuthProvider>
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
export default Manager;