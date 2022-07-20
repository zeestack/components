/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-empty-pattern */
import {
  ColumnDef,
  FilterFn,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Table, createStyles } from '@mantine/core';

import React from 'react';
import { TBody } from './TBody';
import { TFooter } from './TFooter';
import { THeader } from './THeader';
import { TPagination } from './TPagination';
import { rankItem } from '@tanstack/match-sorter-utils';

interface DataTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  search?: string;
  footer?: boolean;
  pagination?: boolean;
}

const globalFilterFn: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);
  // Store the itemRank info
  addMeta({
    itemRank,
  });
  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export function DataTable<T extends object>({
  data,
  columns,
  search,
  footer = false,
  pagination = true,
}: DataTableProps<T>) {
  const table = useReactTable({
    data,
    columns: React.useMemo(() => columns, [columns]),
    state: {
      globalFilter: search,
    },
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: globalFilterFn,
  });

  const { classes } = useStyles();
  return (
    <>
      <Table className={classes.table} striped>
        <THeader header={table.getHeaderGroups()} />
        <TBody rows={table.getRowModel().rows} />
        {footer && (
          <TFooter
            footerHeader={table.getFooterGroups()}
            message={`Displaying ${table.getRowModel().rows.length} rows of ${
              data.length
            } rows`}
          />
        )}
      </Table>

      {pagination && (
        <TPagination
          page={table.getState().pagination.pageIndex + 1}
          total={table.getPageCount()}
          onChange={(page) => table.setPageIndex(page - 1)}
          onPageSizeChange={table.setPageSize}
        />
      )}
    </>
  );
}

export default DataTable;

// Styles used by the DataTable

const useStyles = createStyles((theme) => ({
  table: {
    marginTop: theme.spacing.xs,
    borderRadius: theme.spacing.md,
    overflow: 'hidden',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    captionSide: 'bottom',

    caption: {
      margin: 0,
      padding: theme.spacing.lg,
    },

    thead: {
      tr: {
        th: {
          paddingTop: theme.spacing.xl,
          backgroundColor: theme.colors['brand'][0],
          color: theme.colors['brand'][9],
          fontWeight: 'bold',
          fontSize: '1rem',
          fontStyle: 'italic',
        },
      },
    },
  },
}));
