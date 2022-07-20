import { TextInput, TextInputProps, createStyles } from '@mantine/core';

/* eslint-disable-next-line */
export interface InputProps extends TextInputProps {
  width?: string | number;
}

export function Input({ value, width, ...rest }: InputProps) {
  const { classes } = useStyles({ width });
  return (
    <TextInput
      classNames={classes}
      radius='xl'
      size='md'
      value={value}
      {...rest}
    />
  );
}

export default Input;

const useStyles = createStyles((theme, { width }: Partial<InputProps>) => ({
  wrapper: {
    width,
  },
}));
