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
			cards: null,
			show: false
		}
	}
	componentWillMount(){
    this.props.fetchTopic(this.props.match.params.topic)
    	.then(() => {
    		this.setState({
					cards: Object.keys(this.props.cards).map(key => this.props.cards[key])
    		});
    	});
  }
  nextCard = () => {
  	if (this.state.cardNum + 1 > this.state.cards.length - 1) {
  		this.setState({
  			cardNum: 0,
  			show: false
  		})
  	} else {
	  	this.setState({
	  		cardNum: this.state.cardNum+1,
	  		show: false
	  	})
  	}
  }
  prevCard = () => {
  	if (this.state.cardNum - 1 < 0) {
  		this.setState({
  			cardNum: this.state.cards.length - 1,
  			show: false
  		})
  	} else {
			this.setState({
				cardNum: this.state.cardNum-1,
				show: false
			})
  	}
  }
  toggleAnswer = () => {
  	this.setState({
  		show: !this.state.show
  	})
  }
	renderCard(num) {
		return(
			<Card 
				card={this.state.cards[num]} 
				show={this.state.show}
			/>
		)
	}
	render() {
		console.log("printing props of quiz", this.props);
		console.log("printing state of quiz", this.state);
		if (this.state.cards == null) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<div className="quiz-header">
					<h1>Quiz</h1>
					<div className="btn-group">
						<Link 
							to={`/topics/${this.props.match.params.topic}`} 
							className="btn btn-danger">
								QUIT
						</Link>
					</div>
				</div>
				
				<div>
					{this.renderCard(this.state.cardNum)}
				</div>
				<div className="navBtns">
					<button className="btn btn-primary" onClick={this.prevCard}>Previous</button>
					<button className="btn btn-primary" onClick={this.toggleAnswer}>Show/Hide Answer</button>
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