import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import { colours } from '../helpers/styles';

import Nav from './Nav';

const SWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${colours.black};
`;

const HtmlHead = () => (
  <Head>
    <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
    <link rel="stylesheet" href="/core.css" />
  </Head>
);

const Wrapper:React.FC = ({ children }) => (
  <SWrapper>
    <HtmlHead />
    <Nav />
    <main>
      {children}
    </main>
  </SWrapper>
);

export default Wrapper;
