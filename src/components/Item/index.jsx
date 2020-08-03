import React, { useContext } from 'react';

//Context
import { ContextToModal } from '../../ContextModal';
import { ContextToId } from '../../ContextId';

// Styles
import { Article } from './styles';

// Icons
import trash from '../../assets/images/trash.svg';

const Item = ({ item, id }) => {
  const [active, setActive] = useContext(ContextToModal);
  const [idToDelete, setIdToDelete] = useContext(ContextToId);
  console.log('item to delete: ', idToDelete);

  const confirmDeleteModal = () => {
    setActive(true);
    setIdToDelete(id);
  };

  const numberToArray = id.toString();
  const lastNumberOfArray = numberToArray.charAt(numberToArray.length - 1);

  const dynamicStyles = {
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
    }`,
    filter: `${active ? 'blur(2px)' : 'blur(0)'}`
  };

  return (
    <>
      <Article style={dynamicStyles}>
        <p>{item}</p>
        {!active ? (
          <button type='button' onClick={confirmDeleteModal}>
            <img src={trash} alt='trash' />
          </button>
        ) : (
          <button type='button'>
            <img src={trash} alt='trash' />
          </button>
        )}
      </Article>
    </>
  );
};

export default Item;
