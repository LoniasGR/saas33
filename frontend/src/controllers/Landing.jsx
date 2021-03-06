import React from 'react';
import axios from 'axios';

import LandingView from '../views/Landing';
import { questionsAPIUrl } from '../lib/constants';

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    axios.get(`${questionsAPIUrl}/`)
      .then((response) => {
        const { questions } = response.data;
        this.setState({ questions });
      });
  }

  render() {
    const { questions } = this.state;

    return (
      <div>
        <LandingView
          questions={questions}
        />
      </div>
    );
  }
}

export default Landing;
