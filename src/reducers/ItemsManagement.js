const initialState = {
  items: [
    // {
    //   item: 'Call the doctor',
    //   id: Math.floor(Math.random() * 9999999)
    // },
    // {
    //   item: 'Walk the dog 🐶',
    //   id: Math.floor(Math.random() * 9999999)
    // }
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
