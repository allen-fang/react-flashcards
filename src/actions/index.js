export const FETCH_TOPIC = 'fetch_topic';

export function fetchTopic(topic){
  return {
    type: FETCH_TOPIC,
    payload: topic
  };
}
