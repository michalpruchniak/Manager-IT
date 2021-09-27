import { createStore, applyMiddleware } from "redux";
import ManagerPanel from "./Manager_panel";
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./reducers";

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))

if (document.getElementById('manager')) {
    ReactDOM.render(
        <Provider store={store}>
            <ManagerPanel />
        </Provider>
        , document.getElementById('manager'));
}
