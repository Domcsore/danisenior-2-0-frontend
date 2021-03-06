import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { sizes, colours } from '../helpers/styles';

const SdivButton = styled.div`
  position: relative;
  height: ${sizes.mobileButton};
  width: ${sizes.mobileButton};

  & > div:nth-of-type(1) {
    top: 0;
    transform: translateY(0);
    transition: top 500ms 100ms, transform 200ms;
  }

  & > div:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transition: top 500ms 100ms, transform 200ms;
  }

  & > div:nth-of-type(3) {
    top: 100%;
    transform: translateY(-100%);
    transition: top 500ms 100ms, transform 200ms;
  }
`;

const SdivButtonOpen = css`
  & > div:nth-of-type(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    transition: top 500ms, transform 200ms 300ms;
  }

  & > div:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    transition: top 500ms, transform 200ms 300ms;
  }

  & > div:nth-of-type(3) {
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
    transition: top 500ms, transform 200ms 300ms;
  }
`;

interface SdivBurgerBarProps {
  colour: colours,
}

const barStyle = (colour: colours) => css`
  position: absolute;
  background-color: ${colour};
  height: 18%;
  border-radius: 3px;
  width: 100%;
  display: block;
`;

const SdivBurgerBar = styled.div<SdivBurgerBarProps>`
  ${({ colour }) => barStyle(colour)};
`;

interface HamburgerProps {
  open: boolean,
  onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void,
  colour: colours,
  label: string,
  className?: string,
}

const Hamburger = ({
  open,
  onClick,
  colour,
  label,
  className,
}: HamburgerProps) => (
  <SdivButton className={className} css={open ? [SdivButtonOpen] : null} onClick={onClick} tabIndex={0} role="button" aria-pressed={open} aria-expanded={open} aria-label={label}>
    <SdivBurgerBar colour={colour} />
    <SdivBurgerBar colour={colour} />
    <SdivBurgerBar colour={colour} />
  </SdivButton>
);

export default Hamburger;
