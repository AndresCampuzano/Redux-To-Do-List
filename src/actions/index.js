export const addItemToList = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item,
    }
}

export const deleteItemFromList = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id,
    }
}

export const handleLoginAction = (value) => {
    return {
        type: 'SIGN_IN',
        payload: value,
    }
}
