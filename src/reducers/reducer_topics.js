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




// const examplestate = [
// {id: 1, name: 'javascript', question: 'what is javascript', answer: 'a language'},
// {id: 2, name: 'javascript', question: 'who is the strongest', answer: 'me'},
// {id: 3, name: 'javascript', question: 'who is the tallest', answer: 'you'},
// {id: 4, name:  'python', question: 'what is python', answer: 'a snake'},
// {id: 5, name:  'python', question: 'what is a snakes favorite food', answer: 'vegetables'},
// {id: 6, name:  'python', question: 'what do snakes drink', answer: 'water'},
// {id: 7, name: 'ios', question: 'what is ios', answer:'?'},
// {id: 8, name: 'ios', question: 'who uses ios', answer:'apple'},
// {id: 9, name: 'ios', question: 'how', answer:'eee'},
// {id: 10,name: 'behavioral', question: 'tell me about yourself', answer: 'no'},
// {id: 11, name: 'behavioral', question: 'what do you like to eat', answer: 'pizza'},
// {id: 12, name: 'behavioral', question: 'what do you like to drink', answer: 'water'},
// {id: 13, name: 'web Development', question: 'what is your name', answer: 'who'},
// {id: 14, name: 'web Development', question: 'what is your last name', answer: 'huh'},
// {id: 15, name: 'web Development', question: 'who are you', answer: 'person'},
// {id: 16, name: 'databases', question: 'what is a db', answer: 'database'},
// {id: 17, name: 'databases', question: 'what is sql', answer: 'a db'},
// {id: 18, name: 'databases', question: 'what is mongo', answer: 'a db'}
// ];
