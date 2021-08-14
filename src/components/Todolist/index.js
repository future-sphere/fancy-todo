import React, { useState } from 'react';
import './index.css';
import { CheckCircleIcon } from '@heroicons/react/solid';

const exampleTodoList = [
  {
    isComplete: true,
    text: 'Buy new sweatshirt',
  },
  {
    isComplete: true,
    text: 'Try not to fall asleep',
  },
  {
    isComplete: false,
    text: 'Read an article',
  },
];

function Todolist() {
  const [todos, setTodos] = useState(exampleTodoList);
  const [input, setInput] = useState('');

  const handleSubmitTodo = () => {
    if (input) {
      const nextTodo = [...todos];
      nextTodo.push({ text: input, isComplete: false });
      setTodos(nextTodo);
      setInput('');
    } else {
      alert('You need to fill out the input');
    }
  };

  const handleToggleTodo = (index) => {
    const nextTodo = [...todos];
    nextTodo[index].isComplete = !nextTodo[index].isComplete;
    setTodos(nextTodo);
  };

  return (
    <div className='todo-container'>
      <div className='box'>
        <div className='header'>
          <div className='date'>
            <h2>12</h2>
            <p>jan</p>
            <span>2016</span>
          </div>
          <div className='week'>
            <h3>tuesday</h3>
          </div>
        </div>
        <div className='body'>
          {todos.map((v, i) => (
            <div
              onClick={() => handleToggleTodo(i)}
              className={`${v.isComplete ? 'active ' : ''}todo`}
              key={i}
            >
              {v.isComplete ? <strike>{v.text}</strike> : <span>{v.text}</span>}
              <CheckCircleIcon />
            </div>
          ))}
        </div>
        <div className='footer'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
          />
          <button onClick={handleSubmitTodo}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
