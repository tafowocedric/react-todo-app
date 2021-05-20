import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Switch } from 'react-router-dom';

// components
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './Navbar';

const TodoContainer = () => {
    function getInitialTodos() {
        // getting stored items
        const temp = localStorage.getItem('todos');
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
    }

    const [todos, setTodos] = useState(getInitialTodos());

    useEffect(() => {
        // storing todos items

        const temp = JSON.stringify(todos);
        localStorage.setItem('todos', temp);
    }, [todos]);

    const handleUpdateCompleted = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    };

    const deleteTodo = (id) => {
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== id;
            }),
        ]);
    };

    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const handleUpdateTitle = (new_title, id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.title = new_title;
                }
                return todo;
            })
        );
    };

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <div>
                        <div className='container'>
                            <div className='inner'>
                                <Header />
                                <InputTodo addTodoProps={addTodoItem} />
                                <TodosList todos={todos} deleteTodoProps={deleteTodo} handleUpdateCompletedProps={handleUpdateCompleted} handleUpdateTitleProps={handleUpdateTitle} />
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </>
    );
};

export default TodoContainer;
