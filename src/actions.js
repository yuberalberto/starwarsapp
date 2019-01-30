import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PEOPLE_PENDING,
  REQUEST_PEOPLE_SUCCESS,
  REQUEST_PEOPLE_FAILED
} from './constants.js';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
})

export const requestPeople = () => (dispatch) => {
  dispatch({ type: REQUEST_PEOPLE_PENDING})
  fetch('https://swapi.co/api/people')
  .then(response => response.json())
  .then(data => dispatch({type: REQUEST_PEOPLE_SUCCESS, payload: data}))
  .catch(error => dispatch({type: REQUEST_PEOPLE_FAILED, payload: error}))
}