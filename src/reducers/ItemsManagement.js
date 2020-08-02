const initialState = {
  items: [
    {
      item: 'Milk',
      id: 4561278
    },
    {
      item: 'Eggs',
      id: 5640024
    },
    {
      item: 'Bread',
      id: 1047996
    }
  ]
};
const ItemsManagement = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [
          ...state.items,
          {
            item: action.payload,
            id: Math.floor(Math.random() * 9999999)
          }
        ]
      };
    case 'DELETE_ITEM':
      return {
        items: [...state.items.filter(item => item.id !== action.payload)]
      };
    default:
      return state;
  }
};

export default ItemsManagement;
