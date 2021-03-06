import React from 'react';
import styled from '@emotion/styled';

import { sizes } from '../helpers/styles';

const Shone = styled.h1`
  font-family: 'stoner', cursive;
  font-size: ${sizes.xxl};
`;

interface HeadingProps {
  type: string;
}

const Heading:React.FunctionComponent<HeadingProps> = ({ children }) => (
  <Shone>
    {children}
  </Shone>
);

export default Heading;
