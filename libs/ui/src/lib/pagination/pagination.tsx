import { Pagination as MPagination, PaginationProps } from '@mantine/core';

export function Pagination({ ...rest }: PaginationProps) {
  return <MPagination radius='md' withControls withEdges {...rest} />;
}

export default Pagination;
