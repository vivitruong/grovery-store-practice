const ADD_PRODUCT = 'cart/addProduct';
const REMOVE_PRODUCT = 'cart/removeProduct';
const INCREMENT_COUNT = 'cart/incrementCount';
const DECREMENT_COUNT = 'cart/decrementCount';
const EMPTY_CART = 'cart/emptyCart';

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
};
export const incrementCount = (produceId) => {
    return {
        type: INCREMENT_COUNT,
        produceId
    }
};
export const decrementCount = (produceId) => {
    return {
        type: DECREMENT_COUNT,
        produceId
    }
};
export const emptyCart = () => {
    return {
        type: EMPTY_CART,
        payload: null
    }
};

export default function cartReducer (state = {}, action) {
    // const id = action.produceId;
    let newState = {...state};
    switch(action.type) {
        case ADD_PRODUCT:
            if(newState[action.produceId]){
                newState[action.produceId].count++;
            } else {
                // newState[action.produceId] = {id: action.produceId, count: 1}
                const newProduct = {id: action.produceId, count: 1};
                // newState.products[action.produceId] = newProduct;
                // newState.order.push(action.produceId);

                const currCart = Object.values(newState);
                const updateCart = [newProduct, ...currCart];
                 newState = updateCart.reduce((cart, product) => {
                    cart[product.id] = product;
                    return cart
                }, {})
                // return newState;
            }
            return newState;

        case REMOVE_PRODUCT:
            delete newState[action.produceId];
            return newState;
        case INCREMENT_COUNT:
            newState[action.produceId].count++;
            return newState;
        case DECREMENT_COUNT:
            if(newState[action.produceId].count > 1) {
                newState[action.produceId].count--;
            } else {
                delete newState[action.produceId]
            }
            return newState;
        case EMPTY_CART: {
            return {};
        }

        default:
            return state
    }

};
