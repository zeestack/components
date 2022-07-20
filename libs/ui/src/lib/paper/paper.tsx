/* eslint-disable @typescript-eslint/no-explicit-any */
import { Paper as MPaper, PaperProps } from '@mantine/core';

export function Paper({ children, ...rest }: PaperProps<any>) {
  return (
    <MPaper p='md' shadow='xs' {...rest}>
      {children}
    </MPaper>
  );
}

export default Paper;
