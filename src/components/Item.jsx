import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemFromList } from '../actions';

const Item = ({ item, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItemFromList(id));
  };
  return (
    <article>
      <p>
        <span role='img' aria-label='item'>
          📄
        </span>{' '}
        {item}
      </p>
      <p>
        <span role='img' aria-label='key'>
          🔑
        </span>
        {id}
      </p>
      <button type='button' onClick={handleDelete}>
        Delete
      </button>
    </article>
  );
};

export default Item;
