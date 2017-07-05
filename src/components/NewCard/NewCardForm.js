import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createCard } from '../../actions';

class NewCard extends Component {
  renderSelect(field){
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return(
      <div className={className}>
        <label>{field.label}</label>
        <div>
        <select className="form-control" {...field.input}>
          <option></option>
          <option value="javascript">Javascript</option>
          <option value="python">Python</option>
          <option value="ios">IOS</option>
          <option value="behavioral">Behavioral</option>
          <option value="web">Web Development</option>
          <option value="databases">Data Bases</option>
        </select>
        </div>
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
      this.props.createCard(values, () => {
        this.props.history.push('/');
      });
    }

  render(){
    const { handleSubmit } = this.props;
    return(
      <div>
        <h1>new card</h1>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Name of Topic"
            name="name"
            component={this.renderSelect}
          />
          <Field
            label="Question"
            name="question"
            component={this.renderField}
          />
          <Field
            label="Answer"
            name="answer"
            component={this.renderField}
          />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  //convention
  const errors = {};

  //validate the inputs from 'values'
  if (!values.name) {
    errors.name = "Please select a title!";
  }

  if(!values.question){
    errors.question = 'Enter a question';
  }

  if (!values.answer) {
    errors.content = "Enter an answer";
  }

  // if errors empty the form is fine to submit
  // if errors object not empty, then redux form assumes form is invalid
  return errors;
}


export default reduxForm({
  validate,
  form: "CardsNewForm"
})(
  connect(null, { createCard })(NewCard)
);
