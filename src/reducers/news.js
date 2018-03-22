import {GET_NEWS_REQUEST, GET_NEWS_SUCCESS} from "../constants/constants";

const initialState = {
    newsArr: [],
    fetching: false
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS_REQUEST:
            return { ...state, newsArr: action.payload, fetching: true };
        
        case GET_NEWS_SUCCESS:
            return { ...state, newsArr: action.payload, fetching: false };
        
        default:
            return state;
    }
}