import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TopicPage from './components/TopicPage/TopicPage_container';
import NewCard from './components/NewCard/NewCardForm';
import Quiz from './components/Quiz/Quiz';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/new" component={NewCard} />
            <Route path="/topics/:topic/quiz" component={Quiz} />
            <Route path="/topics/:topic" component={TopicPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
