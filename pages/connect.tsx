import React from "react";
import styled from "@emotion/styled";
import Wrapper from "../components/Wrapper";
import Grid from "../components/Grid";
import { sizes } from "../helpers/styles";
import Title from "../components/Title";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

const SGridConnect = styled(Grid)`
  height: 100%;
  grid-template-rows: min-content auto;
`;

const SGridForm = styled(Grid)`
  grid-template-rows: min-content auto min-content;
`;

const Connect = () => (
  <Wrapper title="Connect">
    <SGridConnect gap={sizes.xxl}>
      <Title>Connect</Title>
      <SGridForm gap={sizes.xxl}>
        <Grid columns={1} mdColumns={2} gap={sizes.xxl}>
          <Input name="name" label="Name" placeholder="Name" />
          <Input name="email" label="Email" placeholder="Email" />
        </Grid>
        <Textarea name="message" label="message" placeholder="Message" />
        <Button>Connect</Button>
      </SGridForm>
    </SGridConnect>
  </Wrapper>
);

export default Connect;
