import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Text } from './styles';

import calendar from '../../assets/images/calendar.svg';

const TaskNumber = () => {
  const list = useSelector(state => state.list);

  return (
    <Container>
      <Text>
        You have {list.items.length}{' '}
        {list.items.length === 1 ? 'task' : 'tasks'} for today
      </Text>
      <img src={calendar} alt='calendar' />
    </Container>
  );
};

export default TaskNumber;
