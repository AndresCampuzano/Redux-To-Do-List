import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemFromList } from '../../actions';

import { Article } from './styles';

import trash from '../../assets/images/trash.svg';

const Item = ({ item, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItemFromList(id));
  };

  const numberToArray = id.toString();
  const lastNumberOfArray = numberToArray.charAt(numberToArray.length - 1);

  const colorItem = {
    backgroundColor: `${
      lastNumberOfArray === '0' || lastNumberOfArray === '1'
        ? '#FD564C'
        : lastNumberOfArray === '2' || lastNumberOfArray === '3'
        ? '#da61ff'
        : lastNumberOfArray === '4' || lastNumberOfArray === '5'
        ? '#61ff69'
        : lastNumberOfArray === '6' || lastNumberOfArray === '7'
        ? '#FFE061'
        : '#1E429F'
    }`
  };
  return (
    <Article style={colorItem}>
      <p>{item}</p>
      <button type='button' onClick={handleDelete}>
        <img src={trash} alt='trash' />
      </button>
    </Article>
  );
};

export default Item;
