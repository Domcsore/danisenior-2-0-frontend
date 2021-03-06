import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { colours } from '../helpers/styles';

interface AProps {
  colour: colours,
  active?: boolean,
}

const SDefaultActive = (props: AProps) => css`
  border-bottom: 1px solid ${props.colour};
`;

const SANav = styled.a<AProps>`
  color: ${({ colour }) => colour};
  text-decoration: none;
  ${({ active, colour }) => (active ? SDefaultActive({ colour }) : null)};
`;

interface LinkProps extends NextLinkProps {
  title: string,
  colour?: colours,
  className?: string,
}

const Link = (props: LinkProps) => {
  const router = useRouter();

  const {
    title,
    href,
    as,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
    colour = colours.white,
    className,
  } = props;

  const active = router.asPath === href;

  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
      passHref
    >
      <SANav href="replace" colour={colour} active={active} className={className}>{title}</SANav>
    </NextLink>
  );
};

export default Link;
