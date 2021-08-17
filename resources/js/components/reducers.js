import _ from "lodash";
import { combineReducers } from "redux";
import tasks from './tasks/reducer'

const allReducers = combineReducers({tasks});

export default allReducers;