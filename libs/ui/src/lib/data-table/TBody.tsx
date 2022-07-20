/* eslint-disable @typescript-eslint/no-explicit-any */
import { Row, flexRender } from '@tanstack/react-table';

interface TBodyProps {
  rows: Row<any>[];
}

export function TBody({ rows }: TBodyProps) {
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
