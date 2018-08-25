import React from "react";
import { string, number } from "prop-types";
import { Link } from "@reach/router";
import Icon from "Components/Icon";
import style from "./StoryPreview.css";

const StoryPreview = ({ title, points, id, commentsCount, url, user }) => (
  <span className={style.wrapper}>
    <a className={style.titleLink} href={url}>
      {title}
    </a>
    <Link className={style.metaDataWrapper} to={`/item/${id}`}>
      <span className={style.metaData}>
        <Icon fill="#808080" icon="thumbs_up_down" />
        <span style={{ marginLeft: "4px" }}>{points}</span>
      </span>
      <span className={style.metaData}>
        <Icon fill="#808080" icon="mode_comment" />
        <span style={{ marginLeft: "4px" }}>{commentsCount}</span>
      </span>
      <span className={style.metaData}>
        <Icon fill="#808080" icon="person" />
        <span style={{ marginLeft: "4px" }}>{user}</span>
      </span>
    </Link>
  </span>
);

StoryPreview.propTypes = {
  commentsCount: number,
  id: number,
  points: number,
  title: string,
  url: string,
  user: string
};

export default StoryPreview;
