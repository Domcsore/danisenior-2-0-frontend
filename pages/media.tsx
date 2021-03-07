import React from 'react';
import styled from '@emotion/styled';

import { sizes } from '../helpers/styles';

import Wrapper from '../components/Wrapper';
import Title from '../components/Title';
import Grid from '../components/Grid';

const Media = () => (
  <Wrapper title="Media">
    <Grid gap={sizes.xxl}>
      <Title>Media</Title>
      <Grid mdColumns={2}>
        
      </Grid>
    </Grid>
  </Wrapper>
);

export default Media;
