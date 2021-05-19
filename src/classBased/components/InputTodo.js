import React, { Component } from 'react';

export class InputTodo extends Component {
    state = {
        title: '',
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: '',
            });
        } else {
            alert('Please write item');
        }
    };

    render() {
        return (
            <form className='form-container' action='' onSubmit={this.handleSubmit}>
                <input className='input-text' onChange={this.onChange} type='text' defaultValue={this.state.title} name='title' placeholder='Add Todo ...' />
                <button className='input-submit' type='submit'>
                    Submit
                </button>
            </form>
        );
    }
}

export default InputTodo;
