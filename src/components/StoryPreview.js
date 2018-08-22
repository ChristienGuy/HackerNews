import React from "react";
import { string, number } from "prop-types";
import { Link } from "@reach/router";
import styled from "styled-components";
import Icon from "./Icon";

// styled components
const Wrapper = styled.span`
  display: inline-block;
  width: 100%;
  padding: 8px 16px;
  border-bottom: 1px solid #d1d1d1;
`;

const MetaDataWrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

const MetaData = styled.span`
  margin-right: 8px;
  font-size: 12px;
  color: #808080;
  text-decoration: none;

  display: flex;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: #222222;
  display: inline-block;
  margin-bottom: 8px;
`;

const StoryPreview = ({ title, points, id, commentsCount, url, user }) => (
  <Wrapper>
    <Anchor href={url}>{title}</Anchor>
    <MetaDataWrapper to={`/item/${id}`}>
      <MetaData>
        <Icon fill="#808080" icon="thumbs_up_down" />
        <span style={{ marginLeft: '4px' }}>{points}</span>
      </MetaData>
      <MetaData>
        <Icon fill="#808080" icon="mode_comment" />
        <span style={{ marginLeft: '4px' }}>{commentsCount}</span>
      </MetaData>
      <MetaData>
        <Icon fill="#808080" icon="person" />
        <span style={{ marginLeft: '4px' }}>{user}</span>
      </MetaData>
    </MetaDataWrapper>
  </Wrapper>
);

StoryPreview.propTypes = {
  title: string,
  points: number,
  id: number
};

export default StoryPreview;
