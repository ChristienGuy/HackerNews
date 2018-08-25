import React from "react";
import { array } from "prop-types";
import StoryPreview from "./StoryPreview";
import style from "./StoryList.css";

const StoryList = ({ stories }) => (
  <ul className={style.list}>
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
  </ul>
);

StoryList.propTypes = {
  stories: array
};

export default StoryList;
