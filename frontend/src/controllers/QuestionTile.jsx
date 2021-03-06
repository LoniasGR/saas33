import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import QuestionView from '../views/QuestionTile';
import { keywordsAPIUrl, questionsAPIUrl } from '../lib/constants';

class Question extends React.Component {
  constructor(props) {
    super(props);
    const { title, description, askedBy } = this.props;
    this.state = {
      title,
      description,
      askedBy,
      keywords: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    axios.get(`${questionsAPIUrl}/${id}`)
      .then(async (response) => {
        const keywordIds = response.data.question.keywords;
        const keywordNames = keywordIds.map((keyword) => (axios.get(`${keywordsAPIUrl}/${keyword.keywordId}`)
          .then((keywordResponse) => keywordResponse.data.keyword.name)));
        const promiseKeywords = await Promise.all(keywordNames);
        this.setState({
          keywords: promiseKeywords,
        });
      })
      .catch((err) => console.error(err));
  }

  handleClick(event) {
    event.preventDefault();
    const { id, history } = this.props;
    history.push(`/question/?id=${id}`);
  }

  render() {
    const {
      title, description, keywords, askedBy,
    } = this.state;
    return (
      <div>
        <QuestionView
          title={title}
          description={description}
          keywords={keywords}
          askedBy={askedBy}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  askedBy: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Question);
