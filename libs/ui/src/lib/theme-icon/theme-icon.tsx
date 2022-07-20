import {
  ThemeIcon as MThemeIcon,
  ThemeIconProps as MThemeIconProps,
} from '@mantine/core';

import React from 'react';

/* eslint-disable-next-line */
export interface _ThemeIconProps<T extends React.ElementType>
  extends Omit<MThemeIconProps, 'children'> {
  iconComponent?: T;
  fromColor?: string;
  toColor?: string;
  degree?: number;
}

type ThemeIconProps<T extends React.ElementType> = _ThemeIconProps<T> &
  Omit<React.ComponentProps<T>, keyof _ThemeIconProps<T>>;

export const ThemeIcon = <T extends React.ElementType = 'div'>({
  iconComponent,
  fromColor,
  toColor,
  degree,
  size,
  ...rest
}: ThemeIconProps<T>) => {
  const Component = iconComponent || 'div';

  return (
    <MThemeIcon
      gradient={{
        from: fromColor || 'teal',
        to: toColor || 'blue',
        deg: degree || 60,
      }}
      radius='xl'
      size={size}
      variant='gradient'
      {...rest}
    >
      <Component />
    </MThemeIcon>
  );
};

export default ThemeIcon;
