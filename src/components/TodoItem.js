import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/TodoItem.module.css';
function TodoItem({ todo, handleChangeProps, deleteTodoProps }) {
    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    };

    const { id, completed, title } = todo;

    return (
        <li className={styles.item}>
            <input className={styles.checkbox} type='checkbox' onChange={() => handleChangeProps(id)} checked={completed} name='complete' id='complete' />
            <button onClick={() => deleteTodoProps(id)}>Delete</button>
            <span style={completed ? completedStyle : null}>{title}</span>
        </li>
    );
}

TodoItem.prosTypes = {
    todo: PropTypes.object,
};

export default TodoItem;
