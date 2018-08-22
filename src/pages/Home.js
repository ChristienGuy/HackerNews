import React, { Component } from "react";
import { array } from "prop-types";
import axios from "axios";
import StoryList from "Components/StoryList";

import { apiRoot } from "Utils/constants";

const Home = ({ stories }) => <StoryList stories={stories} />;
Home.propTypes = {
  stories: array
};

class HomeContainer extends Component {
  state = {
    stories: []
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
