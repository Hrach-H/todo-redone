import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from "./todolistitem";

class TodoList extends React.Component {
    renderTodos() {
        return this.props.todos.map((todo) => {
            return <TodoListItem key={todo.id} {...todo} />
        })
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {this.renderTodos()}
                </tbody>
            </table>
        );

    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);