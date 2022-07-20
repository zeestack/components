import { Input, InputProps, ThemeIcon } from '@pms/ui';

import { Search } from 'tabler-icons-react';

//import { ThemeIcon } from '@mantine/core';

/* eslint-disable-next-line */
export interface SeachbarProps extends InputProps {}

export function Searchbar({ ...rest }: SeachbarProps) {
  return (
    <Input
      icon={<ThemeIcon iconComponent={Search} />}
      placeholder='search'
      radius='md'
      size='md'
      {...rest}
    />
  );
}

export default Searchbar;
