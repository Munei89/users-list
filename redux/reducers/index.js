import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Users from './Users';

const reducers = combineReducers({
    routing: routerReducer,
    users: Users,
});

export default reducers;
