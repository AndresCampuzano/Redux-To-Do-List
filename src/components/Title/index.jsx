import React, { useContext } from 'react';
import { H1 } from './styles';

//Context
import { ContextToModal } from '../../ContextModal';

const Title = () => {
  // Context
  const [active, setActive] = useContext(ContextToModal);

  const dynamicStyles = {
    filter: `${active ? 'blur(2px)' : 'blur(0)'}`
  };

  return (
    <>
      <H1 style={dynamicStyles}>Task Manager</H1>
    </>
  );
};

export default Title;
