import { TRowControls, TRowControlsProps } from './TRowControl';

import { ColumnDef } from '@tanstack/react-table';
import { makeData } from './makedata';

export interface Product {
  id: number;
  partno: string;
  name: string;
  price: string;
  description: string;
  manufacturer: string;
}

export const products_data: Product[] = makeData(2000);

export class ProductSchema {
  //Define Columns

  static columns: ColumnDef<Product>[] = [
    {
      accessorKey: 'id',
      footer: () => null,
      header: 'Product Id',
    },
    {
      accessorKey: 'partno',
      footer: () => null,
      header: 'Part#',
    },
    {
      accessorKey: 'description',
      footer: () => null,
      header: 'Description',
    },
    {
      accessorKey: 'price',
      footer: () => null,
      header: 'Price',
    },
    {
      accessorKey: 'manufacturer',
      footer: () => null,
      header: 'Manufacturer',
    },
    {
      cell: ({ row }) => {
        return (
          <TRowControls
            control={2}
            onClick={this.actionHandler}
            rowId={row.index}
          />
        );
      },
      footer: () => null,
      header: 'actions',
    },
  ];
  private static actionHandler?: TRowControlsProps['onClick'];

  //Set Action Handler
  static setActionHandler(actionHandler: typeof ProductSchema.actionHandler) {
    ProductSchema.actionHandler = actionHandler;
  }
}
