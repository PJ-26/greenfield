import React from 'react';
import axios from 'axios';

// import tone_analyzer from '../../../server.js';
// import ToneAnalyzerV3 from 'node_modules/../watson-developer-cloud/tone-analyzer/v3';d

// When button is clickfdgdfgdfged
  // Run a function that makes a request to watson's API passing in the input text as a param

/*
const tone_analyzer = new ToneAnalyzerV3({
  username: WATSON_USERNAME,
  password: WATSON_PASSWORD,
  version_date: '2016-05-19'
  headers: {
    'X-Watson-Learning-Opt-Out': 'true'
  }
});

const params = {
  body: (input);
}

tone_analyzer.tone(params, function(error, response) {
  if (error)
    console.log('error:', error);
  else
    console.log(JSON.stringify(response, null, 2));
  }
);
*/

// Use the POST endpoint with plain text
// Params needed: Body Body, Header Content-Type (text/plain)
// URL: https://gateway.watsonplatform.net/tone-analyzer/api/v3/

/*
fetch("https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?sentences=false&version=2016-05-19", {
  body: (input),
  headers: {
    Accept: 'application/json',
    "Content-Type": 'text/plain'
  },
  method: 'POST'
});
*/

export class NewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {entry: ''};
  }
  handleEntryChange(event) {
    this.setState({entry: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    const params = {text: this.state.entry};
    axios.post('api/newentry', params).
    then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });

    // const tone_analyzer = new ToneAnalyzerV3({
    //   username: REACT_APP_WATSON_USERNAME,
    //   password: REACT_APP_WATSON_PASSWORD,
    //   version_date: '2016-05-19',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'X-Watson-Learning-Opt-Out': 'true'
    //   }
    // });
    // tone_analyzer.tone(params, function (error, response) {
    //   if (error) {
    //     console.log('error:', error);
    //   } else
    //     console.log(JSON.stringify(response, null, 2));
    //   }
    // );
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="header">
          <h1>New Diary Entry</h1>
        </div>
        <div className="mainBody">
          <form>
            <label htmlFor="newDiaryEntry">Your New Diary Entry:</label>
            <textarea className="form-control" id="newDiaryEntry" onChange={this.handleEntryChange.bind(this)}></textarea>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}