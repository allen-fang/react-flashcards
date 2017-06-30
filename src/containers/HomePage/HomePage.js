import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topics: ['JavaScript', 'Python', 'iOS', 'Behavioral', 'Web Development', 'Databases']
		}
	}
	renderTopics() {
		return this.state.topics.map((topic) => (
			<li
				key={topic}
				className="btn btn-primary">
				{topic}
			</li>
		))
	}
	render() {
		return(
			<div>
				<div className="header">
					<h1>Ready for that Interview?</h1>
					<h3>Pick a Topic</h3>
					<ul>
						{this.renderTopics()}
					</ul>
				</div>
			</div>
		)
	}
}

export default HomePage;