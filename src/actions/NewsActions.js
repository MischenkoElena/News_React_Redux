import {  GET_NEWS_REQUEST, GET_NEWS_SUCCESS } from '../constants/constants';

export function getNews() {
    return (dispatch) => {
        dispatch({
            type: GET_NEWS_REQUEST,
            payload: []
        });
        
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: GET_NEWS_SUCCESS,
                    payload: json
                })
            });
    }
}