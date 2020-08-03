import React, { useContext } from 'react';
import Form from '../../components/Form';
import Title from '../../components/Title';
import TaskNumber from '../../components/TaskNumber';
import ListItems from '../../components/ListItems';
import ModalDelete from '../../components/ModalDelete';

//Context
import { ContextToModal } from '../../ContextModal';

const Home = () => {
  const [active, setActive] = useContext(ContextToModal);

  return (
    <>
      <Form />
      <Title />
      <TaskNumber />
      <ListItems />
      {active && <ModalDelete />}
    </>
  );
};

export default Home;
