import axios from 'axios';

export const FETCH_TOPIC = 'fetch_topic';

const ROOT_URL = "http://localhost:8080/topics/";

export function fetchTopic(topic){

  const request = axios.get(`${ROOT_URL}${topic}`);

  return {
    type: FETCH_TOPIC,
    payload: request
  };
}
