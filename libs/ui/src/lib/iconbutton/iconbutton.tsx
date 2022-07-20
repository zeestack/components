import { ActionIcon, ActionIconProps } from '@mantine/core';
import { Icon, IconProps } from 'tabler-icons-react';

import React from 'react';

interface _IconButtonProps {
  icon: Icon;
  iconProps?: IconProps;
  id?: string;
}

type IconButtonProps<T extends React.ElementType> = _IconButtonProps &
  ActionIconProps<T> &
  Omit<React.ComponentProps<T> & ActionIconProps<T>, keyof _IconButtonProps>;

export const IconButton = <T extends React.ElementType = 'button'>({
  icon: Icon,
  iconProps,
  size = 'xl',
  ...rest
}: IconButtonProps<T>) => {
  const iconSize = typeof size === 'number' ? size * 0.6 : '60%';
  const iconRadius = typeof size === 'number' ? size : 'xl';

  return (
    <ActionIcon radius={iconRadius} size={size} variant={'hover'} {...rest}>
      <Icon size={iconSize} {...iconProps} />
    </ActionIcon>
  );
};

export default IconButton;
