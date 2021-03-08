import React from "react";
import styled from "@emotion/styled";

import Link from "./Link";
import Hamburger from "./Hamburger";
import Grid from "./Grid";

import { colours, sizes, media, breakpoints } from "../helpers/styles";

interface SHamburgerContainerProps {
  backgroundColour: colours;
}

const SHamburgerContainer = styled.div<SHamburgerContainerProps>`
  background-color: ${({ backgroundColour }) => backgroundColour};
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: ${sizes.md};

  ${media(breakpoints.md)} {
    display: none;
  }
`;

interface SNavProps {
  open: boolean;
}

const SNav = styled.nav<SNavProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${sizes.md};
  height: calc(100vh - 4rem);
  width: 100vw;
  overflow: auto;
  top: 4rem;
  left: ${({ open }) => (open ? 0 : "-100%")};
  transition: left 700ms;
  background-color: ${colours.black};

  ${media(breakpoints.md)} {
    position: relative;
    top: 0;
    left: 0;
    height: 100vh;
    width: auto;
    padding: ${sizes.xxl};
    transition: none;

    & > a:first-of-type {
      margin-top: 0;
    }
  }
`;

const SdivNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SLink = styled(Link)`
  margin: ${sizes.md} 0;
  text-transform: uppercase;
`;

const SdivNavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;
`;

const SGridSocials = styled(Grid)`
  a {
    max-width: 2.5rem;
  }
`;

interface SocialIconProps {
  type: string;
  image: string;
  href: string;
}

const SocialIcon = ({ type, image, href }: SocialIconProps) => (
  <a href={href}>
    <img src={image} alt={`${type} icon`} />
  </a>
);

interface NavLinksProps {
  open: boolean;
}

const NavLinks = ({ open }: NavLinksProps) => (
  <SNav open={open}>
    <SdivNavLinks>
      <SLink href="/" title="Home" />
      <SLink href="/me" title="Me" />
      <SLink href="/music" title="Music" />
      <SLink href="/media" title="Media" />
      <SLink href="/services" title="Services" />
      <SLink href="/connect" title="Connect" />
    </SdivNavLinks>
    <SGridSocials gap={sizes.none} columns={5} mdColumns={3}>
      <SocialIcon href="#" image="/images/twitter.svg" type="Twitter" />
      <SocialIcon href="#" image="/images/twitter.svg" type="Twitter" />
      <SocialIcon href="#" image="/images/twitter.svg" type="Twitter" />
      <SocialIcon href="#" image="/images/twitter.svg" type="Twitter" />
      <SocialIcon href="#" image="/images/twitter.svg" type="Twitter" />
    </SGridSocials>
  </SNav>
);

interface NavProps {
  onToggle(): void;
  open: boolean;
}

const Nav = ({ onToggle, open }: NavProps) => {
  const handleHamburgerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    event.preventDefault();
    onToggle();
  };

  return (
    <SdivNavContainer>
      <SHamburgerContainer backgroundColour={colours.white}>
        <Hamburger
          open={open}
          onClick={handleHamburgerClick}
          colour={colours.black}
          label="Toggle navigation"
        />
      </SHamburgerContainer>
      <NavLinks open={open} />
    </SdivNavContainer>
  );
};

export default Nav;
