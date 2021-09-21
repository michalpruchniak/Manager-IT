import _ from "lodash";
import { combineReducers } from "redux";
import tasks from './tasks/reducer'
import users from './users/reducer'

const allReducers = combineReducers({tasks, users});

export default allReducers;