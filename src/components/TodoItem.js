import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, handleChangeProps, deleteTodoProps }) {
    return (
        <li>
            <input type='checkbox' onChange={() => handleChangeProps(todo.id)} checked={todo.completed} name='complete' id='complete' />
            {todo.title}
            <button onClick={() => deleteTodoProps(todo.id)}>Delete</button>
        </li>
    );
}

TodoItem.prosTypes = {
    todo: PropTypes.object,
};

export default TodoItem;
