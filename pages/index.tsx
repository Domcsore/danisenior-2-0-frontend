import React from 'react';
import styled from '@emotion/styled';

import { media, breakpoints, sizes } from '../helpers/styles';

import Wrapper from '../components/Wrapper';
import Grid from '../components/Grid';
import Title from '../components/Title';
import LinkButton from '../components/LinkButton';
import Heading from '../components/Heading';

const STitleHome = styled(Title)`
  text-align: center;

  ${media(breakpoints.md)} {
    text-align: left;
  }
`;

const SdivCTA = styled.div`
  & > a {
    margin-top: ${sizes.md};

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const SHeadingProfession = styled(Heading)`
  text-align: center;
  margin-bottom: ${sizes.md};

  ${media(breakpoints.md)} {
    text-align: left;
  }
`;

const Home = () => (
  <Wrapper title="Home">
    <Grid mdColumns={2} gap={sizes.xxl}>
      <STitleHome>Dani Senior</STitleHome>
      <SdivCTA>
        <LinkButton title="Connect" href="/connect" />
        <LinkButton title="Vocal Recording Services" href="/services" />
      </SdivCTA>
      <div>
        <SHeadingProfession>Singer - Songwriter</SHeadingProfession>
        <Grid columns={3} rows={3}>
          <img src="/images/one.jpg" alt="Song cover" />
          <img src="/images/one.jpg" alt="Song cover" />
          <img src="/images/one.jpg" alt="Song cover" />
          <img src="/images/one.jpg" alt="Song cover" />
          <img src="/images/one.jpg" alt="Song cover" />
          <img src="/images/one.jpg" alt="Song cover" />
          <img src="/images/one.jpg" alt="Song cover" />
          <img src="/images/one.jpg" alt="Song cover" />
          <img src="/images/one.jpg" alt="Song cover" />
        </Grid>
      </div>
      <div>
        <SHeadingProfession>DJ</SHeadingProfession>
        <Grid columns={2} rows={2}>
          <img src="/images/two.jpg" alt="Song cover" />
          <img src="/images/two.jpg" alt="Song cover" />
          <img src="/images/two.jpg" alt="Song cover" />
          <img src="/images/two.jpg" alt="Song cover" />
        </Grid>
      </div>
    </Grid>
  </Wrapper>
);

export default Home;
