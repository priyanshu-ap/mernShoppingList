import { ADD_ITEMS, GET_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';
import axios from 'axios';


export const getItems = () => dispatch => {
    dispatch(itemsLoading());
    axios.get('api/items')
        .then(res => dispatch({
            type:GET_ITEMS,
            payload: res.data
        }))
};

export const deleteItem = id => dispatch => {
    axios.delete(`api/items/${id}`)
    .then(res => dispatch({
        type:DELETE_ITEMS,
        payload: id
    }))
};

export const addItem = item => dispatch => {
    dispatch(itemsLoading());
    axios.post('api/items', item)
        .then(res => dispatch({
            type:ADD_ITEMS,
            payload: res.data
        }))
};

export const itemsLoading = () => {
    return {
        type: ITEMS_LOADING,
    };
};