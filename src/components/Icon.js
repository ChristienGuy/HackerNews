import React from "react";
import styled from "styled-components";

const IconWrapper = styled.span`
  display: flex;
  svg {
    width: 12px;
    height: 12px;
    fill: ${({ fill }) => fill};
  }
`;
const Icon = ({ icon, fill }) => {
  return (
    <IconWrapper
      fill={fill}
      dangerouslySetInnerHTML={{
        __html: require(`../assets/svg/${icon}.svg`)
      }}
    />
  );
};

export default Icon;
