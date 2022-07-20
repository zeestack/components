/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TextProps as MTextProps,
  Text as MantineText,
  createStyles,
} from '@mantine/core';

import React from 'react';

export type TextProps = MTextProps<any> & {
  fontStyle?: 'normal' | 'italic' | 'oblique';
  children?: React.ReactNode;
};

export function Text({ children, fontStyle, className, ...rest }: TextProps) {
  const { classes, cx } = useStyles({ fontStyle });
  return (
    <MantineText className={cx(className, classes.text)} {...rest}>
      {children}
    </MantineText>
  );
}

// export const Text = React.forwardRef<HTMLElement, TextProps>(
//   ({ children, fontStyle, className, ...rest }, ref) => {
//     const { classes } = useStyles({ fontStyle });

//     return (
//       <MantineText
//         ref={ref}
//         className={[className, classes.text].join()}
//         {...rest}
//       >
//         {children}
//       </MantineText>
//     );
//   }
// );

export function Caption({ ...rest }: TextProps) {
  return (
    <Text
      component="caption"
      fontStyle="italic"
      size="sm"
      color="dimmed"
      align="left"
      {...rest}
    />
  );
}

const useStyles = createStyles((theme, { fontStyle }: TextProps) => ({
  text: {
    fontStyle: fontStyle || 'normal',
  },
}));
