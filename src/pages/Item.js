import React, { Component, Fragment } from "react";
import { apiRoot } from "../constants";
import axios from "axios";

class Item extends Component {
  state = {
    data: null
  };

  async componentDidMount() {
    const { id } = this.props;
    const { data } = await axios.get(`${apiRoot}/item/${id}`);

    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data ? (
          <Fragment>
            <h1>{data.title}</h1>
          </Fragment>
        ) : null}
      </div>
    );
  }
}

export default Item;
