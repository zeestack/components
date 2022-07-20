import { HeaderGroup, flexRender } from '@tanstack/react-table';

/* eslint-disable @typescript-eslint/no-explicit-any */

interface THeaderProps {
  header: HeaderGroup<any>[];
}

export function THeader({ header }: THeaderProps) {
  return (
    <thead>
      {header.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
