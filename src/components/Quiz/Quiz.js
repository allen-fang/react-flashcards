import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTopic } from '../../actions'
import Card from './Card';
import './Quiz.css';

class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardNum: 0,
			cards: Object.keys(this.props.cards).map(key => this.props.cards[key])
		}
	}
	componentWillMount(){
    this.props.fetchTopic(this.props.match.params.topic);
  }
  componentWillReceiveProps(){
  	this.setState({
  		cards: Object.keys(this.props.cards).map(key => this.props.cards[key])
  	})
  }
  nextCard = () => {
  	if (this.state.cardNum + 1 > this.state.cards.length - 1) {
  		this.setState({
  			cardNum: 0
  		})
  	} else {
	  	this.setState({
	  		cardNum: this.state.cardNum+1
	  	})
  	}
  }
  prevCard = () => {
  	if (Math.abs(this.state.cardNum) + 1 > this.state.cards.length - 1) {
  		this.setState({
  			cardNum: 0
  		})
  	} else {
			this.setState({
				cardNum: this.state.cardNum-1
			})
  	}
  }
	renderCard(num) {
		return(
			<Card card={this.state.cards[num]}/>
		)
	}
	render() {
		console.log("printing props of quiz", this.props);
		console.log("printing state of quiz", this.state);
		if (this.state.cards.length == 0) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h1>Quiz Component</h1>
				<div>
					{this.renderCard(this.state.cardNum)}
				</div>
				<div className="navBtns">
					<button className="btn btn-primary">Previous</button>
					<button className="btn btn-primary" onClick={this.nextCard}>Next</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		cards: state.topics
	};
}

export default connect(mapStateToProps, { fetchTopic })(Quiz);