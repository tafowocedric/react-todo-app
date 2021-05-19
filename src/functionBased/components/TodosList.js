import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
    return (
        <ul>
            {props.todos.map((todo) => (
                <TodoItem handleUpdateTitleProps={props.handleUpdateTitleProps} deleteTodoProps={props.deleteTodoProps} handleUpdateCompletedProps={props.handleUpdateCompletedProps} key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

TodosList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleUpdateTitleProps: PropTypes.func.isRequired,
    deleteTodoProps: PropTypes.func.isRequired,
    handleUpdateCompletedProps: PropTypes.func.isRequired,
};

export default TodosList;
