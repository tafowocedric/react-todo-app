import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
    const [inputText, setInputText] = useState({ title: '' });

    const onChange = (e) => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title);
            setInputText({ title: '' });
        } else {
            alert('Please write item');
        }
    };

    return (
        <form className='form-container' action='' onSubmit={handleSubmit}>
            <input className='input-text' name='title' onChange={onChange} type='text' value={inputText.title} placeholder='Add Todo ...' />
            <button className='input-submit' type='submit'>
                <FaPlusCircle />
            </button>
        </form>
    );
};

export default InputTodo;
