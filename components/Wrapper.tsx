import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import {
  colours,
  media,
  breakpoints,
  sizes,
} from '../helpers/styles';

import Nav from './Nav';

interface SWrapperProps {
  navOpen: boolean;
}

const SWrapper = styled.div<SWrapperProps>`
  position: relative;
  max-height: 100vh;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${colours.black};
  overflow: ${({ navOpen }) => (navOpen ? 'hidden' : 'auto')};

  ${media(breakpoints.md)} {
    overflow: auto;
    display: flex;
  }
`;

const Smain = styled.main`
  padding: ${sizes.md};

  ${media(breakpoints.md)} {
    padding: ${sizes.xxl}
  };
`;

const HtmlHead = () => (
  <Head>
    <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
    <link rel="stylesheet" href="/core.css" />
  </Head>
);

const Wrapper:React.FC = ({ children }) => {
  const [navOpen, setNavOpen] = React.useState(false);

  const onNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <SWrapper navOpen={navOpen}>
      <HtmlHead />
      <Nav onToggle={onNavToggle} open={navOpen} />
      <Smain>
        {children}
      </Smain>
    </SWrapper>
  );
};

export default Wrapper;
