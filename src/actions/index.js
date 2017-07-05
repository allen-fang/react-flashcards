import axios from 'axios';
// var axios = require('axios');

export const FETCH_TOPIC = 'fetch_topic';
export const CREATE_CARD = 'create_card';
export const DELETE_CARD = 'delete_card';

const ROOT_URL = "http://localhost:8080/topics";

export function fetchTopic(topic){

  const request = axios.get(`${ROOT_URL}/${topic}`);

  return {
    type: FETCH_TOPIC,
    payload: request
  };
}

export function createCard(values, callback){
  const request = axios.post(`${ROOT_URL}`, values)
    .then(() => callback());

  return {
    type: CREATE_CARD,
    payload: request
  };
}

export function deleteCard(id, callback) {
  const request = axios.delete(`${ROOT_URL}/${id}`)
    .then(() => callback());

  return {
    type: DELETE_CARD,
    payload: id
  }
}
