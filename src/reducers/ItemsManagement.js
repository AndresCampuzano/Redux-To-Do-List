const initialState = {
    items: [
        { item: 'Buy the bread 🍞', id: 9452051 },
        { item: 'Call the doctor 👩‍⚕️', id: 8832038 },
    ],
}
const ItemsManagement = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        item: action.payload,
                        id: Math.floor(Math.random() * 9999999),
                    },
                ],
            }
        case 'DELETE_ITEM':
            return {
                items: [
                    ...state.items.filter((item) => item.id !== action.payload),
                ],
            }
        default:
            return state
    }
}

export default ItemsManagement
