import React from 'react';
import styled from '@emotion/styled';

import Wrapper from '../components/Wrapper';
import Grid from '../components/Grid';
import Title from '../components/Title';

const STitleHome = styled(Title)`
  text-align: center;
`;

const Home = () => (
  <Wrapper>
    <Grid mdColumns={2}>
      <STitleHome>Dani Senior</STitleHome>
      <p>Test</p>
    </Grid>
  </Wrapper>
);

export default Home;
