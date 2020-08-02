import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToList } from '../actions';

const Form = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const updateTask = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addItemToList(task));
    setTask(''); // Cleaning input
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          id='task'
          value={task}
          onChange={updateTask}
          placeholder='type task here...'
        />
        <button type='submit'>Add</button>
      </form>
    </>
  );
};

export default Form;
