import React from 'react';
import Item from './Item';
import { useSelector } from 'react-redux';

const ListItems = () => {
  const list = useSelector(state => state.list);
  const isLogged = useSelector(state => state.isLogged);
  console.log('list: ', list);
  console.log('isLogged: ', isLogged);

  return (
    <>
      {list.items.map(info => (
        <Item item={info.item} key={info.id} id={info.id} />
      ))}
    </>
  );
};

export default ListItems;
