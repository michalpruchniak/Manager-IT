import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import { ToastContainer } from 'react-toastify';
import Alltasks from './tasks/container/allTasks';

import { composeWithDevTools } from "redux-devtools-extension";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import allReducers from "./reducers";
import thunk from 'redux-thunk'
import AddTask from './tasks/container/addTask';
import authProvider from './include/authProvider';


const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))
function Manager() {
useEffect(() => {
    authProvider();
})
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <div className="card-body">
                            <Alltasks />
                            <AddTask />
                            <ToastContainer />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Manager;

if (document.getElementById('manager')) {
    ReactDOM.render(
        <Provider store={store}>
            <Manager />
        </Provider>
        , document.getElementById('manager'));
}
