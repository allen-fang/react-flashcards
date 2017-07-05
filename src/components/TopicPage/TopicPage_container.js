import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchTopic, deleteCard } from '../../actions';
import './TopicPage.css';

class TopicPage extends Component {
  componentDidMount(){
    this.props.fetchTopic(this.props.match.params.topic);
  }

  onDeleteClick= (e) => {
    this.props.deleteCard(e.target.value, () => {
      return;
    })
  }

  renderCards(){
    return _.map(this.props.topics, topic => {
      return(
        <tr key={topic._id}>
          <td>{topic.question}</td>
          <td>{topic.answer}</td>
          <td><button value={topic._id} className="btn btn-danger" onClick={this.onDeleteClick}>delete</button></td>
        </tr>
      );
    });
  }

  renderQuestions(){
    return _.map(this.props.topics, topic => {
      return(
        <div key={topic._id}>
          <Link to={`/${this.props.match.params.topic}/${topic.id}`}>
          {topic.name} questions
          </Link>
        </div>
      );
    });
  }

  render(){
    console.log(this.props.topics[1]);
    return(
      <div>
       <h2 className="center">topics page</h2>
       <div id="navbar" className="col-lg-3 col-md-3">
         {this.renderQuestions()}
       </div>
       <div id="questiontable" className="col-lg-9 col-md-9">
         <table>
           <thead>
              <tr>
               <th>Question</th>
               <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              {this.renderCards()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    topics: state.topics
  };
}

export default connect(mapStateToProps, { fetchTopic, deleteCard })(TopicPage);
