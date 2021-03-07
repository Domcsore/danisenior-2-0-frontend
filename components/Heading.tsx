import React from "react";
import styled from "@emotion/styled";

import { sizes } from "../helpers/styles";

const Shone = styled.h2`
  font-family: "stoner", cursive;
  font-size: ${sizes.xxl};
  font-weight: 400;
`;

interface HeadingProps {
  className?: string;
}

const Heading: React.FunctionComponent<HeadingProps> = ({
  children,
  className,
}) => <Shone className={className}>{children}</Shone>;

export default Heading;
