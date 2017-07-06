import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
		console.log(this.props);
		const { card } = this.props;
		return (
			<div className="card">
				<p>Question: {card.question}</p>
			</div>
		)
	}
}

export default Card;