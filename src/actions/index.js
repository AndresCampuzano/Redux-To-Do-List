export const addItemToList = item => {
  return {
    type: 'ADD_ITEM',
    payload: item
  };
};

export const deleteItemFromList = id => {
  return {
    type: 'DELETE_ITEM',
    payload: id
  };
};
