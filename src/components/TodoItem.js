import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles/TodoItem.module.css';

export class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.object,
    };

    state = {
        editing: false,
    };

    handleEditing = () => {
        this.setState({
            editing: true,
        });
    };

    handleUpdatedDone = (e) => {
        if (e.key === 'Enter') {
            this.setState({ editing: false });
        }
    };

    render() {
        let viewMode = {};
        let editMode = {};
        if (this.state.editing) {
            viewMode.display = 'None';
        } else {
            editMode.display = 'None';
        }

        const completedStyle = {
            fontStyle: 'italic',
            color: '#595959',
            opacity: 0.4,
            textDecoration: 'line-through',
        };

        const { id, completed, title } = this.props.todo;

        return (
            <div>
                <li className={styles.item}>
                    <div onDoubleClick={this.handleEditing} style={viewMode}>
                        <input className={styles.checkbox} type='checkbox' onChange={() => this.props.handleChangeProps(id)} checked={completed} name='complete' id='complete' />
                        <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
                        <span style={completed ? completedStyle : null}>{title}</span>
                    </div>
                    <input
                        type='text'
                        onChange={(e) => {
                            this.props.setUpdateProps(e.target.value, id);
                        }}
                        defaultValue={title}
                        style={editMode}
                        name='text'
                        className={styles.textInput}
                        onKeyDown={this.handleUpdatedDone}
                    />
                </li>
            </div>
        );
    }
}

export default TodoItem;
