import React from 'react';

export default class TodoListItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.description}</td>
            </tr>
        );
    }
}