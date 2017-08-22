import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class TodoListItem extends Component {
    componentWillMount() {
        this.props.initialize({
            description: this.props.description
        });
    }

    render() {
        return (
            <li>
               <Field name="description" type="text" component="input"/>
            </li>
        );
    }
}

TodoListItem = reduxForm({
    form: 'todo'
})(TodoListItem);

export default TodoListItem;