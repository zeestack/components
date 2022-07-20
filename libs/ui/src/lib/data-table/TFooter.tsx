/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeaderGroup, flexRender } from '@tanstack/react-table';

import { Caption } from '@pms/ui';
import React from 'react';

interface TFooterProps {
  footerHeader: HeaderGroup<any>[];
  message?: string;
}

export function TFooter({ footerHeader, message }: TFooterProps) {
  return (
    <React.Fragment>
      <tfoot>
        {footerHeader.map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
      {message && <Caption>{message}</Caption>}
    </React.Fragment>
  );
}
