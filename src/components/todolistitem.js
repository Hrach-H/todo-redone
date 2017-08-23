import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { store } from '../index';
import { connect } from 'react-redux';
import { saveTodo } from '../actions'

class TodoListItem extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            input: '',
            disabled: true
        }
    }

    handleChange(e) {
        this.setState({
            id: e.target.name.substring(e.target.name.indexOf('_')+1),
            input: e.target.value,
            disabled: false
        });
    }

    handleClick() {
        this.setState({
            disabled: true
        });
        store.dispatch(saveTodo(this.state));
    }



    render() {
        return (
            <li>
               <Field name={'id_' + this.props.id} type="text" component="input" onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>Save</button>
            </li>
        );
    }
}

// let TodoListItem = (props) => {
//     return (
//         <li>
//             <Field name={'id_' + props.id} type="text" component="input"/>
//         </li>
//     );
// };

TodoListItem = reduxForm({
    form: 'todo',
    enableReinitialize: true
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