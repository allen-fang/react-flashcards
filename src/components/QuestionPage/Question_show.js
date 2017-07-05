import React, { Component } from 'react';
import Axios from 'axios';

class ShowQuestion extends Component {
  constructor(props){
    super(props);
    this.cancelToken = Axios.CancelToken.source();
  }
  componentDidMount(){
    Axios.get("http://localhost:8080/topics/python", {
           cancelToken: this.cancelToken.token
       }).then((result) => {
         console.log(result.data);
       }).catch((err) => {
           if (Axios.isCancel(err)) {
               console.log('Request canceled', err.message);
       }
  });
}

  render(){
    return(
      <div>
        questions show page!
      </div>
    );
  }
}

export default ShowQuestion;
