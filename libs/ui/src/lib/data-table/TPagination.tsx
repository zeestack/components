import { NumberInput, Pagination, Select, Text } from '@pms/ui';

import { Group } from '@mantine/core';
import { useState } from 'react';

interface TPaginationProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export function TPagination({
  page,
  total,
  onChange,
  onPageSizeChange,
}: TPaginationProps) {
  const [goTopage, setGoToPage] = useState<number | undefined>();
  const [pageSize, setPageSize] = useState<string | null>('10');

  return (
    <Group>
      <Pagination page={page} total={total} onChange={handlePagination} />

      <Text fontStyle="italic">{'Go to page num'}</Text>
      <NumberInput
        value={goTopage}
        onChange={handlePageChange}
        max={total}
        min={1}
        width={64}
      />

      <Text fontStyle="italic">{'Rows'}</Text>
      <Select
        searchable
        value={pageSize}
        nothingFound="No options"
        data={['10', '20', '30', '50']}
        width={64}
        onChange={handlePageSizeChange}
      />
      <Text fontStyle="italic">{'page'}</Text>
    </Group>
  );

  // Keep Event Handlers at the bottom of the component markup

  function handlePageChange(page: number) {
    if (page > 0 && page <= total) {
      onChange(page);
      setGoToPage(page);
    }
  }

  function handlePagination(pager: number) {
    if (pager > 0 && pager <= total) {
      onChange(pager);
      setGoToPage(undefined);
    }
  }

  function handlePageSizeChange(pageSize: string) {
    if (pageSize) {
      onPageSizeChange(parseInt(pageSize, 10));
      setPageSize(pageSize);
    }
  }
}

export default TPagination;
