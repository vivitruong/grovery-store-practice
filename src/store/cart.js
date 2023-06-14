const ADD_PRODUCT = 'cart/addProduct';
const REMOVE_PRODUCT = 'cart/removeProduct'

export const addProduct = (produceId) => {
    return {
        type: ADD_PRODUCT,
        produceId
    }
};

export const removeProduct = (produceId) => {
    return {
        type: REMOVE_PRODUCT,
        produceId
    }
}

export default function cartReducer (state = {}, action) {
    // const id = action.produceId;
    const newState = {...state};
    switch(action.type) {
        case ADD_PRODUCT:
            if(newState[action.produceId]){
                newState[action.produceId].count++;
            } else {
                newState[action.produceId] = {id: action.produceId, count: 1}
            }
            return newState;
        case REMOVE_PRODUCT:
            delete newState[action.produceId];
            return newState;


        default:
            return state
    }

};
