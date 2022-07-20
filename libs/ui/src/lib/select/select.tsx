import {
  Select as MantineSelect,
  SelectProps as MantineSelectProps,
  createStyles,
} from '@mantine/core';
/* eslint-disable-next-line */
export interface SelectProps extends MantineSelectProps {
  width?: number | string;
}

export function Select({ width, ...rest }: SelectProps) {
  const { classes } = useStyles({ width });
  return <MantineSelect classNames={{ input: classes.input }} {...rest} />;
}

export default Select;

const useStyles = createStyles((theme, { width }: Partial<SelectProps>) => ({
  input: {
    width: width || '100%',
  },
}));
