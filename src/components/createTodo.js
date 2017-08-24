import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { addTodo } from '../actions';
import { store } from '../index';


let createTodo = (props) => {
    const submit = (todo) => {
        store.dispatch(addTodo(todo.newTodo));
    };

    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Field name="newTodo" component="input" type="text" />
            <button type="submit">Save</button>
        </form>
    )
};

const clearInput = () => {
    store.dispatch(reset('new-todo'));
};

createTodo = reduxForm({
    form: 'new-todo',
    onSubmitSuccess: clearInput
})(createTodo);

export default createTodo;