import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

import styles from './styles/TodoItem.module.css';

const TodoItem = (props) => {
    const [content, setContent] = useState({ todo: props.todo, editing: false });

    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
            setContent((prevState) => {
                return {
                    ...prevState,
                    editing: false,
                };
            });
        }
    };

    const handleEditing = () => {
        setContent((prevState) => {
            return {
                ...prevState,
                editing: true,
            };
        });
    };

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    };

    let viewMode = {};
    let editMode = {};

    if (content.editing) viewMode.display = 'None';
    else editMode.display = 'None';

    const { id, title, completed } = content.todo;

    useEffect(() => {
        return () => {
            //
        };
    }, []);

    return (
        <div>
            <li className={styles.item}>
                <div onDoubleClick={handleEditing} style={viewMode}>
                    <input className={styles.checkbox} type='checkbox' onChange={() => props.handleUpdateCompletedProps(id)} checked={completed} />
                    <button className='input-submit' onClick={() => props.deleteTodoProps(id)}>
                        <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
                    </button>
                    <span style={completed ? completedStyle : null}>{title}</span>
                </div>
                <input
                    type='text'
                    onChange={(e) => {
                        props.handleUpdateTitleProps(e.target.value, id);
                    }}
                    defaultValue={title}
                    style={editMode}
                    name='text'
                    className={styles.textInput}
                    onKeyDown={handleUpdatedDone}
                />
            </li>
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    handleUpdateTitleProps: PropTypes.func.isRequired,
    deleteTodoProps: PropTypes.func.isRequired,
    handleUpdateCompletedProps: PropTypes.func.isRequired,
};

export default TodoItem;
