import React from 'react';
import Form from '../../components/Form';
import Title from '../../components/Title';
import TaskNumber from '../../components/TaskNumber';
import ListItems from '../../components/ListItems';

const Home = () => {
  return (
    <>
      <Form />
      <Title />
      <TaskNumber />
      <ListItems />
    </>
  );
};

export default Home;
