import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';


const VISIBLE_FIELDS = ['name', 'position' , 'salary' , 'email', 'phone' , 'username', 'city', 'country'];

export default function DataGridProDemo() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 30,
    // editable: true,
    visibleFields: VISIBLE_FIELDS,
    // maxColumns: 10
  });
  console.log('data')
  console.log(data)

  const [sortModel, setSortModel] = React.useState([
    {
      field: 'quantity',
      sort: 'desc',
    },
  ]);

  return (
    <Box sx={{ height: 520, width: '80vw', margin: '2rem auto' }}>
      <DataGridPro
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        // checkboxSelection
        // disableRowSelectionOnClick={false}
        sortModel={[ { field: 'name', sort: 'asc' } ]}
        slots={{ toolbar: GridToolbar }}
        initialState={{
          ...data.initialState,
          filter: {
            filterModel: {
              items: [{ field: 'salary', operator: '>', value: '50000' }]
            }
          }
        }}
        // initialState={{
          // sorting: {
          //   sortModel: {
          //     field: 'Quantity',
          //     sort: 'desc'
          //   }
          // }
          // items: [{ field:  }]
        // }}
      />
    </Box>
  );
}
