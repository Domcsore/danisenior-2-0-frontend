import React from 'react';
import styled from '@emotion/styled';

import Link from './Link';
import Hamburger from './Hamburger';

import {
  colours,
  sizes,
  media,
  breakpoints,
} from '../helpers/styles';

interface SHamburgerContainerProps {
  backgroundColour: colours,
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
  open: boolean,
}

const SNav = styled.nav<SNavProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${sizes.md};
  height: calc(100vh - 4rem);
  width: 100vw;
  overflow: auto;
  top: 4rem;
  left: ${({ open }) => (open ? 0 : '-100%')};
  transition: left 700ms;
  background-color: ${colours.black};

  ${media(breakpoints.md)} {
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    width: auto;
    padding: ${sizes.xxl};
    transition: none;

    & > a:first-of-type {
      margin-top: 0;
    }
  }
`;

const SLink = styled(Link)`
  margin: ${sizes.md} 0;
  text-transform: uppercase;
`;

const SdivNavContainer = styled.div`
  position: sticky;
  top: 0;

  ${media(breakpoints.md)} {
    position: relative;
  }
`;

interface NavLinksProps {
  open: boolean
}

const NavLinks = ({ open }: NavLinksProps) => (
  <SNav open={open}>
    <SLink href="/" title="Home" />
    <SLink href="/me" title="Me" />
    <SLink href="/music" title="Music" />
    <SLink href="/media" title="Media" />
    <SLink href="/services" title="Services" />
    <SLink href="/connect" title="Connect" />
  </SNav>
);

interface NavProps {
  onToggle(): void;
  open: boolean;
}

const Nav = ({ onToggle, open }: NavProps) => {
  const handleHamburgerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    event.preventDefault();
    onToggle();
  };

  return (
    <SdivNavContainer>
      <SHamburgerContainer backgroundColour={colours.white}>
        <Hamburger open={open} onClick={handleHamburgerClick} colour={colours.black} label="Toggle navigation" />
      </SHamburgerContainer>
      <NavLinks open={open} />
    </SdivNavContainer>
  );
};

export default Nav;
