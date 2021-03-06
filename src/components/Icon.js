/* global require */
import React from "react";
import { string } from 'prop-types';
import style from "./Icon.css";

const Icon = ({ icon, fill }) => {
  return (
    <span
      className={style.icon}
      style={{ fill: fill }}
      dangerouslySetInnerHTML={{
        __html: require(`../assets/svg/${icon}.svg`)
      }}
    />
  );
};

Icon.propTypes = {
  icon: string,
  fill: string,
}

export default Icon;
