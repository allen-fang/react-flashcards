import axios from 'axios';
// var axios = require('axios');

export const FETCH_TOPIC = 'fetch_topic';
export const CREATE_CARD = 'create_card';
export const DELETE_CARD = 'delete_card';

const ROOT_URL = "https://reactflashcards.herokuapp.com";

export function fetchTopic(topic){

  const request = axios.get(`${ROOT_URL}/topics/${topic}`);

  return {
    type: FETCH_TOPIC,
    payload: request
  };
}

export function createCard(values, callback){
  const request = axios.post(`${ROOT_URL}/topics`, values)
    .then(() => callback());

  return {
    type: CREATE_CARD,
    payload: request
  };
}

export function deleteCard(id, callback) {
  const request = axios.delete(`${ROOT_URL}/topics/${id}`)
    .then(() => callback());

  return {
    type: DELETE_CARD,
    payload: id
  }
}
