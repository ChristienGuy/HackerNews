import React, { Component } from "react";
import { apiRoot } from "Utils/constants";
import CommentList from "./CommentList";
import axios from "axios";
import { string, array, number } from "prop-types";

class ItemContainer extends Component {
  state = {
    data: null
  };

  async componentDidMount() {
    const { id } = this.props;
    const { data } = await axios.get(`${apiRoot}/item/${id}`);
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return data ? (
      <Item
        item={data}
        title={data.title}
        url={data.url}
        user={data.user}
        type={data.type}
        points={data.points}
        comments={data.comments}
      />
    ) : null;
  }
}

const Item = ({ title, comments }) => (
  <div>
    <h1>{title}</h1>

    {comments.length ? (
      <CommentList comments={comments} />
    ) : (
      <p>No comments here...</p>
    )}
  </div>
);

Item.propTypes = {
  title: string,
  url: string,
  user: string,
  type: string,
  points: number,
  comments: array
};

export { ItemContainer as default, Item };
