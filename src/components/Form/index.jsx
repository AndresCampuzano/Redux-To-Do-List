import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToList } from '../../actions';

// Styles
import { Container, Button, FormStyle, Input, Profile } from './styles';

import addImage from '../../assets/images/add.svg';
import me from '../../assets/images/me.png';

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
    <Container>
      <Profile src={me} alt='Andres Campuzano Garzon' />
      <FormStyle onSubmit={handleSubmit}>
        <Input
          type='text'
          name='task'
          id='task'
          value={task}
          onChange={updateTask}
          placeholder='Type task here...'
        />
        <Button type='submit'>
          <img src={addImage} alt='add' />
        </Button>
      </FormStyle>
    </Container>
  );
};

export default Form;
