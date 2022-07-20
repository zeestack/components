import { Adjustments, ClearAll, Search } from 'tabler-icons-react';
import { DataTable, IconButton, Paper, Searchbar, ThemeIcon } from '@pms/ui';
import { ProductSchema, products_data } from '../components/productSchema';

import { createStyles } from '@mantine/core';
import { useState } from 'react';

export function App() {
  const [products, setProducts] = useState(products_data);
  const [search, setSearch] = useState('');
  const { classes } = useStyles();

  ProductSchema.setActionHandler(handleTableActions);

  return (
    <div className={classes.container}>
      <Paper>
        <Searchbar onChange={handleChange} value={search} />
        <div style={{ display: 'inline-flex' }}>
          <IconButton
            icon={Adjustments}
            id={'helloWorld'}
            onClick={handleClick}
          />

          <IconButton icon={Search} id={'helloWorld2'} onClick={handleClick} />

          <IconButton
            icon={ClearAll}
            id={'helloWorld3'}
            onClick={handleClick}
          />

          <ThemeIcon iconComponent={Search} />
        </div>

        <DataTable
          columns={ProductSchema.columns}
          data={products}
          footer
          search={search}
        />
      </Paper>
    </div>
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e.currentTarget, 'clicked');
  }

  function handleTableActions(action: string, rowId: number) {
    if (action === 'edit') {
      console.log('edit', rowId);
    } else if (action === 'delete') {
      setProducts(products.filter((product, index) => index !== rowId));
    }
  }
}

export default App;

const useStyles = createStyles((theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xs,
  },
}));
