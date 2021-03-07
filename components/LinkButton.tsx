import styled from '@emotion/styled';
import { sizes, colours } from '../helpers/styles';

import Link from './Link';

const LinkButton = styled(Link)`
  background: ${colours.white};
  color: ${colours.black};
  height: ${sizes.xxl};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${sizes.xxl};
  font-family: 'Caveat', cursive;
  font-size: ${sizes.lg};
`;

export default LinkButton;
