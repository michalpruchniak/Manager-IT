import _ from "lodash";
import { combineReducers } from "redux";
import tasks from './tasks/reducer'
import users from './users/reducer'
import user from './auth/reducer'

const allReducers = combineReducers({tasks, users, user});

export default allReducers;