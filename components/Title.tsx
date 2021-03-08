import React from "react";
import styled from "@emotion/styled";
import { breakpoints, media } from "../helpers/styles";

const ShoneTitle = styled.h1`
  font-family: "stoner", cursive;
  font-size: 7rem;
  font-weight: 400;
  line-height: 1;
  text-align: center;

  ${media(breakpoints.md)} {
    text-align: left;
  }
`;

interface TitleProps {
  className?: string;
}

const Title: React.FunctionComponent<TitleProps> = ({
  children,
  className,
}) => <ShoneTitle className={className}>{children}</ShoneTitle>;

export default Title;
