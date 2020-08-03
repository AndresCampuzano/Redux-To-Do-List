import React, { useContext } from 'react';

//Context
import { ContextToModal } from '../../ContextModal';
import { ContextToId } from '../../ContextId';

// Redux
import { useDispatch } from 'react-redux';
import { deleteItemFromList } from '../../actions';

// Styles
import { Modal, ButtonModalDelete, ButtonModalCancel } from './styles';

const ModalDelete = () => {
  const [active, setActive] = useContext(ContextToModal);
  const [idToDelete] = useContext(ContextToId);
  const dispatch = useDispatch();
  console.log('active from Modal: ', active);
  // console.log('idToDelete from Modal: ', idToDelete);

  const handleDelete = () => {
    dispatch(deleteItemFromList(idToDelete));
    setActive(false);
  };

  const handleCancel = () => {
    setActive(false);
  };

  return (
    <Modal>
      <p>Are you sure you want to delete?</p>
      <div>
        <ButtonModalDelete type='button' onClick={handleDelete}>
          Delete
        </ButtonModalDelete>
        <ButtonModalCancel type='button' onClick={handleCancel}>
          Cancel
        </ButtonModalCancel>
      </div>
    </Modal>
  );
};

export default ModalDelete;
