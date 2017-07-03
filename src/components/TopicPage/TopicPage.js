import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TopicPage.css';

class TopicPage extends Component {

  renderQuestions(){
    return this.props.topics.map((topic) => {
      return(
        <tr key={topic.id}>
          <td>{topic.question}</td>
          <td>{topic.answer}</td>
        </tr>
      );
    });
  }

  render(){
    console.log(this.props.topics[1]);
    return(
      <div>
       <h2>topics page</h2>
       <table>
         <thead>
            <tr>
             <th>Question</th>
             <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {this.renderQuestions()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    topics: state.topics
  };
}

export default connect(mapStateToProps)(TopicPage);
