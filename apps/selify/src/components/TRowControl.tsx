import { ActionIcon, Group } from '@mantine/core';
import { Edit, Trash } from 'tabler-icons-react';

import React from 'react';

export interface TRowControlsProps {
  rowId?: number;
  control?: number;
  onClick?: (action: string, rowId: number) => void;
}

export function TRowControls({
  control = 0,
  onClick,
  rowId = -1,
}: TRowControlsProps) {
  const buttonTypes = { edit: 'edit', delete: 'delete' };

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const action = e.currentTarget.id;
    if (onClick && action) {
      onClick(buttonTypes[action as keyof typeof buttonTypes], rowId);
    }
  }

  return control === 0 ? (
    <Group>
      <ActionIcon component='span' id={buttonTypes.edit} onClick={handleClick}>
        <Edit />
      </ActionIcon>
      <ActionIcon id={buttonTypes.delete} onClick={handleClick}>
        <Trash color='red' size={24} />
      </ActionIcon>
    </Group>
  ) : control === 1 ? (
    <ActionIcon id={buttonTypes.edit} onClick={handleClick}>
      <Edit />
    </ActionIcon>
  ) : control === 2 ? (
    <ActionIcon id={buttonTypes.delete} onClick={handleClick}>
      <Trash color='red' />
    </ActionIcon>
  ) : null;
}

export default TRowControls;
