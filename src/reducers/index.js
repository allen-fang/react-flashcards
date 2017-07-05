import { combineReducers } from 'redux';
import TopicsReducer from './reducer_topics';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  topics: TopicsReducer,
  form: formReducer
});

export default rootReducer;
