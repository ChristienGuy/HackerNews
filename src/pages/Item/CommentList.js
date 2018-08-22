import React from "react";
import styled from "styled-components";

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const ChildList = styled(List)`
  margin-left: 8px;
`;

const StyledComment = styled.div`
  padding: 16px;
  border-left: 4px solid #808080;

  pre {
    overflow: scroll;
  }

  a {
    word-wrap: break-word;
  }
`;

class Comment extends React.Component {
  render() {
    const { user, content, children } = this.props;
    return (
      <li>
        <StyledComment>
          <p>{user}</p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </StyledComment>
        {children}
      </li>
    );
  }
}

class CommentList extends React.Component {
  constructor() {
    super();
  }

  list(comments) {
    const children = items => {
      if (items) {
        return <ChildList>{this.list(items)}</ChildList>;
      }
    };

    return comments.map(({ id, user, content, comments }, index) => {
      return (
        <Comment key={id} user={user} content={content}>
          {children(comments)}
        </Comment>
      );
    });
  }

  render() {
    return <List>{this.list(this.props.comments)}</List>;
  }
}

export default CommentList;
