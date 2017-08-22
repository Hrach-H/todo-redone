import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from "./todolistitem";

// class TodoList extends React.Component {
//     renderTodos() {
//         return this.props.todos.map((todo) => {
//             return <TodoListItem key={todo.id} {...todo} />
//         })
//     }
//
//     render() {
//         return (
//             <ul>
//                 {this.renderTodos()}
//             </ul>
//         );
//
//     }
// }

const TodoList = (props) => {
    const renderTodos = (props) => {
        return props.todos.map((todo) => {
            return <TodoListItem key={todo.id} {...todo} />
        })
    };

    return (
            <ul>
                {renderTodos(props)}
            </ul>
        );
};

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);