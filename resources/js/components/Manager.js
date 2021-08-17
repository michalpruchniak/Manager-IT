import React from 'react';
import ReactDOM from 'react-dom';
// import  store from './store'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import Alltasks from './tasks/allTasks';

import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./reducers";
import thunk from 'redux-thunk'


const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))
function Manager() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <div className="card-body">
                            <Alltasks />
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
