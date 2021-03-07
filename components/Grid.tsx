import React from 'react';
import styled from '@emotion/styled';

import { sizes, media, breakpoints } from '../helpers/styles';

const getAutoString = (count: number): string => {
  let autoString = '';
  for (let i = 0; i < count; i += 1) {
    autoString += 'auto ';
  }

  return autoString;
};

interface SdivGridProps {
  columns: number;
  smColumns: number;
  mdColumns: number;
  lgColumns: number;
  xlColumns: number;
  rows?: number;
  rowGap?: sizes;
  gap: sizes;
}

const SdivGrid = styled.div<SdivGridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => getAutoString(columns)};
  grid-template-rows: ${({ rows }) => (rows ? getAutoString(rows) : null)};
  grid-gap: ${({ gap }) => gap};
  row-gap: ${({ rowGap }) => (rowGap || null)};

  ${media(breakpoints.sm)} {
    grid-template-columns: ${({ smColumns }) => getAutoString(smColumns)};
  }

  ${media(breakpoints.md)} {
    grid-template-columns: ${({ mdColumns }) => getAutoString(mdColumns)};
  }

  ${media(breakpoints.lg)} {
    grid-template-columns: ${({ lgColumns }) => getAutoString(lgColumns)};
  }

  ${media(breakpoints.xl)} {
    grid-template-columns: ${({ xlColumns }) => getAutoString(xlColumns)};
  }
`;

interface GridProps {
  columns?: number;
  smColumns?: number;
  mdColumns?: number;
  lgColumns?: number;
  xlColumns?: number;
  rows?: number;
  gap?: sizes;
  rowGap?: sizes;
  className?: string;
}

const Grid:React.FunctionComponent<GridProps> = ({
  children,
  columns = 1,
  smColumns = columns,
  mdColumns = smColumns,
  lgColumns = mdColumns,
  xlColumns = lgColumns,
  rows,
  rowGap,
  gap = sizes.sm,
  className,
}) => (
  <SdivGrid
    className={className}
    columns={columns}
    smColumns={smColumns}
    mdColumns={mdColumns}
    lgColumns={lgColumns}
    xlColumns={xlColumns}
    rows={rows}
    gap={gap}
    rowGap={rowGap}
  >
    {children}
  </SdivGrid>
);

export default Grid;
