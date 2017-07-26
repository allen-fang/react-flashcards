import {FETCH_TOPIC, DELETE_CARD} from '../actions';
import _ from 'lodash';

export default function (state = {}, action){
    switch(action.type){
      case FETCH_TOPIC:
        console.log(action.payload.data);
        return _.mapKeys(action.payload.data, "_id");
      case DELETE_CARD:
      	return _.omit(state, action.payload);
      default:
        return state;
    }
  }


