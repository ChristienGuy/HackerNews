import React from "react";
import style from "./CommentList.css";
import { string, node, array } from "prop-types";

class Comment extends React.Component {
  render() {
    const { user, content, children } = this.props;
    return (
      <li>
        <div className={style.comment}>
          <p>{user}</p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        {children}
      </li>
    );
  }
}

Comment.propTypes = {
  user: string,
  content: string,
  children: node
};

class CommentList extends React.Component {
  constructor() {
    super();
  }

  list(comments) {
    const children = items => {
      if (items) {
        return <ul className={style.childList}>{this.list(items)}</ul>;
      }
    };

    return comments.map(({ id, user, content, comments }) => {
      return (
        <Comment key={id} user={user} content={content}>
          {children(comments)}
        </Comment>
      );
    });
  }

  render() {
    return <ul className={style.list}>{this.list(this.props.comments)}</ul>;
  }
}

CommentList.propTypes = {
  comments: array
};

export default CommentList;
