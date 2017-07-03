import {FETCH_TOPIC} from '../actions';
// const statetest =   [
//     {id: 1, topic: 'Javascript', question: 'what is javascript', answer: 'a language'},
//     {id: 2, topic: 'Javascript', question: 'who is the strongest', answer: 'me'},
//     {id: 3, topic: 'Javascript', question: 'who is the tallest', answer: 'you'},
//     {id: 4, topic:  'Python', question: 'what is python', answer: 'a snake'},
//     {id: 5, topic:  'Python', question: 'what is a snakes favorite food', answer: 'vegetables'},
//     {id: 6, topic:  'Python', question: 'what do snakes drink', answer: 'water'},
//     {id: 7, topic: 'iOS', question: 'what is ios', answer:'?'},
//     {id: 8, topic: 'iOS', question: 'who uses ios', answer:'apple'},
//     {id: 9, topic: 'iOS', question: 'how', answer:'eee'},
//     {id: 10,topic: 'Behavioral', question: 'tell me about yourself', answer: 'no'},
//     {id: 11, topic: 'Behavioral', question: 'what do you like to eat', answer: 'pizza'},
//     {id: 12, topic: 'Behavioral', question: 'what do you like to drink', answer: 'water'},
//     {id: 13, topic: 'Web Development', question: 'what is your name', answer: 'who'},
//     {id: 14, topic: 'Web Development', question: 'what is your last name', answer: 'huh'},
//     {id: 15, topic: 'Web Development', question: 'who are you', answer: 'person'},
//     {id: 16, topic: 'Databases', question: 'what is a db', answer: 'database'},
//     {id: 17, topic: 'Databases', question: 'what is sql', answer: 'a db'},
//     {id: 18, topic: 'Databases', question: 'what is mongo', answer: 'a db'}
//   ];

const examplestate = [
{id: 1, topic: 'Javascript', question: 'what is javascript', answer: 'a language'},
{id: 2, topic: 'Javascript', question: 'who is the strongest', answer: 'me'},
{id: 3, topic: 'Javascript', question: 'who is the tallest', answer: 'you'},
{id: 4, topic:  'Python', question: 'what is python', answer: 'a snake'},
{id: 5, topic:  'Python', question: 'what is a snakes favorite food', answer: 'vegetables'},
{id: 6, topic:  'Python', question: 'what do snakes drink', answer: 'water'},
{id: 7, topic: 'iOS', question: 'what is ios', answer:'?'},
{id: 8, topic: 'iOS', question: 'who uses ios', answer:'apple'},
{id: 9, topic: 'iOS', question: 'how', answer:'eee'},
{id: 10,topic: 'Behavioral', question: 'tell me about yourself', answer: 'no'},
{id: 11, topic: 'Behavioral', question: 'what do you like to eat', answer: 'pizza'},
{id: 12, topic: 'Behavioral', question: 'what do you like to drink', answer: 'water'},
{id: 13, topic: 'Web Development', question: 'what is your name', answer: 'who'},
{id: 14, topic: 'Web Development', question: 'what is your last name', answer: 'huh'},
{id: 15, topic: 'Web Development', question: 'who are you', answer: 'person'},
{id: 16, topic: 'Databases', question: 'what is a db', answer: 'database'},
{id: 17, topic: 'Databases', question: 'what is sql', answer: 'a db'},
{id: 18, topic: 'Databases', question: 'what is mongo', answer: 'a db'}
];

export default function (state = examplestate, action){
    switch(action.type){

      // case FETCH_TOPIC:

      default:
        return state;
    }
  }
