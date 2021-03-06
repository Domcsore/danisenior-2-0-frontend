import React from 'react';
import styled from '@emotion/styled';

import Link from './Link';
import Hamburger from './Hamburger';

import { colours, sizes } from '../helpers/styles';

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
`;

interface SNavProps {
  open: boolean,
}

const SNav = styled.div<SNavProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${sizes.md} 0;
  height: calc(100vh - 4rem);
  overflow: auto;
  left: ${({ open }) => (open ? 0 : '-100%')};
  transition: left 700ms;
  background-color: ${colours.black};
`;

const SLink = styled(Link)`
  margin: ${sizes.md} 0;
  text-transform: uppercase;
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

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  const handleHamburgerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <SHamburgerContainer backgroundColour={colours.white}>
        <Hamburger open={open} onClick={handleHamburgerClick} colour={colours.black} label="Toggle navigation" />
      </SHamburgerContainer>
      <NavLinks open={open} />
    </>
  );
};

export default Nav;
