import React from "react";
import style from "./Icon.css";


const Icon = ({ icon, fill }) => {
  return (
    <span 
      className={style.icon}
      style={{fill:fill}}
      dangerouslySetInnerHTML={{
        __html: require(`../assets/svg/${icon}.svg`)
      }}
    />
  );
};

export default Icon;
