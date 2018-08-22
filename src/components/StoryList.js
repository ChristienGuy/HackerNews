import React from "react";
import { array } from "prop-types";
import StoryPreview from "Components/StoryPreview";
import styled from "styled-components";

const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StoryList = ({ stories }) => (
  <ListStyled>
    {stories.map(({ id, title, points, comments_count, url, user }) => (
      <li key={id}>
        <StoryPreview
          id={id}
          title={title}
          points={points}
          commentsCount={comments_count}
          url={url}
          user={user}
        />
      </li>
    ))}
  </ListStyled>
);

StoryList.propTypes = {
  stories: array
};

export default StoryList;
