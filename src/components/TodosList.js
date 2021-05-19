import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export class TodosList extends Component {
    static propTypes = {
        todos: PropTypes.array,
    };

    render() {
        return (
            <ul>
                {this.props.todos.map((todo) => (
                    <TodoItem deleteTodoProps={this.props.delTodoProps} handleChangeProps={this.props.handleChangeProps} key={todo.id} todo={todo} />
                ))}
            </ul>
        );
    }
}

export default TodosList;
