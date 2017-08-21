import React from 'react';
import TodoList from './todolist'


export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>A ToDo App</h1>
                <TodoList />
            </div>
        );
    }
}

