import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";

import { colours, media, breakpoints, sizes } from "../helpers/styles";

import Nav from "./Nav";

interface SWrapperProps {
  navOpen: boolean;
}

const SWrapper = styled.div<SWrapperProps>`
  position: relative;
  max-height: 100vh;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${colours.black};
  overflow: ${({ navOpen }) => (navOpen ? "hidden" : "auto")};

  ${media(breakpoints.md)} {
    overflow: auto;
    display: flex;
  }
`;

const Smain = styled.main`
  padding: ${sizes.xxl} ${sizes.md};

  ${media(breakpoints.md)} {
    padding: ${sizes.xxl};
    flex-grow: 1;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  } ;
`;

interface HtmlHeadProps {
  title: string;
}

const HtmlHead = ({ title }: HtmlHeadProps) => (
  <Head>
    <title>{`Dani Senior - ${title}`}</title>
    <link rel="stylesheet" href="/core.css" />
  </Head>
);

const Wrapper: React.FC<HtmlHeadProps> = ({ children, title }) => {
  const [navOpen, setNavOpen] = React.useState(false);

  const onNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <SWrapper navOpen={navOpen}>
      <HtmlHead title={title} />
      <Nav onToggle={onNavToggle} open={navOpen} />
      <Smain>{children}</Smain>
    </SWrapper>
  );
};

export default Wrapper;
