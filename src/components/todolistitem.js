import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

class TodoListItem extends Component {

    render() {
        console.log(this.props);
        return (
            <li>
               <Field name={'id_' + this.props.id} type="text" component="input"/>
            </li>
        );
    }
}

TodoListItem = reduxForm({
    form: 'todo'
})(TodoListItem);

function mapStateToProps(state) {
    return {
        initialValues: state.todos.reduce(function(acc, cur, i) {
            acc['id_' + (i+1)] = cur.description;
            return acc;
        }, {})
    }
}
TodoListItem = connect(mapStateToProps)(TodoListItem);

export default TodoListItem;