import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const Wrapper = styled.span`
  display: inline-block;
  width: 100%;
  padding: 8px 16px;
  border-bottom: 1px solid hsl(0, 0%, 82%);
`;

const StoryPreview = ({ title, commentCount, points, id }) => (
  <Wrapper>
    <Link to={`/item/${id}`}>
      {points} - {title}
    </Link>
  </Wrapper>
);

export default StoryPreview;
