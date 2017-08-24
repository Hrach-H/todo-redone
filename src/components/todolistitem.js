import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { store } from '../index';
import { connect } from 'react-redux';
import { saveTodo } from '../actions'
import '../styles/main.css';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            input: props.description,
            disabled: true
        }
    }

    handleChange(e) {
        this.setState({
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

    toggleInput() {
        this.setState( (prevState) => {
            if (prevState.disabled) {
                return {
                    disabled: !this.state.disabled
                };
            } else {
                store.dispatch(reset('todo'));
                return {
                    disabled: true,
                    input: prevState.input
                };
            }

        } )
    }

    renderButtons() {
        if (this.state.disabled) {
            return (
                <button onClick={this.toggleInput.bind(this)}>Edit</button>
            );
        } else {
            return (
                <span>
                    <button onClick={this.toggleInput.bind(this)}>Cancel</button>
                    <button onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>Save</button>
                </span>
            );
        }
    }



    render() {
        return (
            <li>
               <Field name={'id_' + this.props.id} type="text" component="input" onChange={this.handleChange.bind(this)} disabled={this.state.disabled}/>
                {this.renderButtons()}
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