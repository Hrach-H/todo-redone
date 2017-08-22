import { combineReducers } from 'redux';
import todos from './todos';
import { reducer as formReducer } from 'redux-form';

export const allReducers = combineReducers({
    todos,
    form: formReducer
});