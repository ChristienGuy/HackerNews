import React from "react";
import { string } from "prop-types";
import StoryPreview from "Components/StoryPreview";
import styled from "styled-components";

const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;

const StoryList = ({ stories }) => (
  <ListStyled>
    {stories.map(({ id, title, points }) => (
      <li key={id}>
        <StoryPreview id={id} title={title} points={points} />
      </li>
    ))}
  </ListStyled>
);

StoryList.propTypes = {
  stories: {
    id: string,
    title: string,
    points: string
  }
};

export default StoryList;
