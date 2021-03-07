import React from 'react';
import styled from '@emotion/styled';

const ShoneTitle = styled.h1`
  font-family: 'stoner', cursive;
  font-size: 7rem;
  font-weight: 400;
  line-height: 1;
`;

interface TitleProps {
  className?: string;
}

const Title:React.FunctionComponent<TitleProps> = ({ children, className }) => (
  <ShoneTitle className={className}>
    {children}
  </ShoneTitle>
);

export default Title;
