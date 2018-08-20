import React, { Component } from "react";
import axios from "axios";
import StoryList from 'Components/StoryList';

import { apiRoot } from '../constants';

const Home = ({ stories }) => (
  <StoryList stories={stories} />
);

class HomeContainer extends Component {
  state = {
    stories: [],
  };

  componentDidMount() {
    this.getStories();
  }

  async getStories() {
    const results = await axios.get(`${apiRoot}/news`);

    this.setState({
      stories: results.data
    });
  }

  render() {
    const { stories } = this.state;
    return <Home stories={stories} />;
  }
}
export { HomeContainer as default, Home };
