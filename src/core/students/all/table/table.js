import React from 'react';
import moment from 'moment';
import { useFilters, usePagination, useTable } from 'react-table';

// Define a default UI for filtering
const DefaultColumnFilter = ({ column }) => {
  const count = column.preFilteredRows.length;
  if (column.id === 'dateOfBirth' || column.id === 'gender') {
    return null;
  }
  return (
    <input
      value={column.filterValue || ''}
      onChange={e => {
        column.setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
};

const UsersTable = ({ columns, data }) => {
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    state,
    flatColumns,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    usePagination
  );

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()}>
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
                <div>{column.canFilter ? column.render('Filter') : null}</div>
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody>
        {page.map(
          row =>
            prepareRow(row) || (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  if (cell.column.Header === 'Date of Birth') {
                    return (
                      <td>
                        {
                          cell.value ? (
                            moment(cell.value)
                              .local()
                              .format('MMMM D, YYYY')
                          ) : (
                            'No Value'
                          )
                        }
                      </td>
                    );
                  }
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            )
        )}
        </tbody>
      </table>
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: 'auto',
          width: '75%',
        }}
      >
        <div>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous Page
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next Page
          </button>
        </div>
        <div>
          Page{' '}
          <em>
            {state.pageIndex + 1} of {pageOptions.length}
          </em>
        </div>
        <div style={{ display: 'flex' }}>
          <div>Go to page:</div>
          <input
            type="number"
            defaultValue={state.pageIndex + 1 || 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page)
            }}
          />
        </div>
      </div>
    </>
  );
};

export default UsersTable;
