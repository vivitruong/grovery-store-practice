import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";
export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
};
const LIKE_UNLIKE = "product/likeUnlike"
export const likeUnlike = (produceId) => {
    return {
        type: LIKE_UNLIKE,
        produceId
    }
};

export const getAllProduce = (state) => Object.values(state.produce);


export default function produceReducer(state = {} , action) {

    const newState = {...state};
    switch(action.type) {
        case POPULATE:

            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            });
            return newState;
        case LIKE_UNLIKE:
            newState[action.produceId].liked = !newState[action.produceId].liked;
            return newState;

        default:
            return state;
    }
};
