import React from 'react';
import StoryPreview from "Components/StoryPreview";
import styled from 'styled-components';

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
)

export default StoryList;