import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Container, Text } from './styles';

//Context
import { ContextToModal } from '../../ContextModal';

import calendar from '../../assets/images/calendar.svg';

const TaskNumber = () => {
  // Context
  const [active] = useContext(ContextToModal);

  // Redux
  const list = useSelector(state => state.list);

  const dynamicStyles = {
    filter: `${active ? 'blur(2px)' : 'blur(0)'}`
  };

  return (
    <Container style={dynamicStyles}>
      <Text>
        You have {list.items.length}{' '}
        {list.items.length === 1 ? 'task' : 'tasks'} for today
      </Text>
      <img src={calendar} alt='calendar' />
    </Container>
  );
};

export default TaskNumber;
