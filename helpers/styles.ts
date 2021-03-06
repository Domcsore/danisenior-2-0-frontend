export enum colours {
  white = '#FFF',
  black = '#0F0F0F',
}

export enum sizes {
  sm = '0.5rem',
  md = '1rem',
  lg = '1.5rem',
  xl = '2rem',
  xxl = '3rem',
  mobileButton = '3rem',
}

export enum breakpoints {
  sm = '600px',
  md = '900px',
  lg = '1200px',
  xl = '1800px'
}

export const media = (breakpoint: breakpoints): string => `@media (min-width: ${breakpoint})`;
