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

  render(){
    return(
      <div>
        <h2 className="center">{this.props.match.params.topic} questions</h2>
        <button className="btn btn-primary">Quiz Me</button>
        <div className="btn-group">
          <Link to="/" className="btn btn-danger">Go Back</Link>
        </div>
       
       <div id="questiontable" className="col-lg-12 col-md-12">
         <table className="table">
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
