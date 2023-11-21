import * as React from 'react';
import { useTable, Column, useSortBy, useFilters} from 'react-table'

import { Dropdown } from './tableListComponents/Dropdown';
import { CurrentPage } from './tableListComponents/CurrentPage';
import { Search } from './tableListComponents/Search';
interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: string | null;
  startDate: string | null;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
}

interface TableListEmployeesProps {
  listOfEmployees: Employee[];
}

export const TableListEmployees: React.FC<TableListEmployeesProps> = ({ listOfEmployees }) => {
  // Etat du sélecteur du nombre de lignes devant être affiché
  const [numberRowSelected, setNumberRowSelected] = React.useState(10);
  const [filteredData, setFilteredData] = React.useState(listOfEmployees);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const startPageIndex = (page - 1) * numberRowSelected;
    const endPageIndex = startPageIndex + numberRowSelected;
    setFilteredData(listOfEmployees.slice(startPageIndex, endPageIndex));
  }, [listOfEmployees, numberRowSelected, page]);

  const filterData = (value: string) => {
    const updatedFilterData = listOfEmployees.filter((employee) => {
      return Object.values(employee).some((field) =>
        field
          ? field.toString().toLowerCase().includes(value.toLowerCase())
          : false
      );
    });
    setPage(1);
    setFilteredData(updatedFilterData);
  };

  const columns: Column<Employee>[] = React.useMemo(
    () => [
      {
        Header: (
          <>
            First Name <span className="arrow-up">🔼</span>
            <span className="arrow-down">🔽</span>
          </>
        ),
        accessor: 'firstName',
        sortType: 'alphanumeric',
      },
      {
        Header: (
          <>
            Last Name <span className="arrow-up">🔼</span>
            <span className="arrow-down">🔽</span>
          </>
        ),
        accessor: 'lastName',
        sortType: 'alphanumeric',
      },
      {
        Header: (
          <>
            Date Of Birth <span className="arrow-up">🔼</span>
            <span className="arrow-down">🔽</span>
          </>
        ),
        accessor: 'dateOfBirth',
        sortType: 'alphanumeric',
        Cell: ({ value }) => {
          const formattedDate = value ? value.split('T')[0] : '';
          return formattedDate;
        },
      },
      {
        Header: (
          <>
            Start Date <span className="arrow-up">🔼</span>
            <span className="arrow-down">🔽</span>
          </>
        ),
        accessor: 'startDate',
        sortType: 'alphanumeric',
        Cell: ({ value }) => {
          const formattedDate = value ? value.split('T')[0] : '';
          return formattedDate;
        },
      },
      {
        Header: (
          <>
            Street <span className="arrow-up">🔼</span>
            <span className="arrow-down">🔽</span>
          </>
        ),
        accessor: 'street',
        sortType: 'alphanumeric',
      },
      {
        Header: (
          <>
            City <span className="arrow-up">🔼</span>
            <span className="arrow-down">🔽</span>
          </>
        ),
        accessor: 'city',
        sortType: 'alphanumeric',
      },
      {
        Header: (
          <>
            State <span className="arrow-up">🔼</span>
            <span className="arrow-down">🔽</span>
          </>
        ),
        accessor: 'state',
        sortType: 'alphanumeric',
      },
      {
        Header: (
          <>
            Zip Code <span className="arrow-up">🔼</span>
            <span className="arrow-down">🔽</span>
          </>
        ),
        accessor: 'zipCode',
        sortType: 'alphanumeric',
      },
      {
        Header: (
          <>
            Department <span className="arrow-up">🔼</span>
            <span className="arrow-down">🔽</span>
          </>
        ),
        accessor: 'department',
        sortType: 'alphanumeric',
      },
    ],
    []
  );

  const data = React.useMemo(() => filteredData, [filteredData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [],
        pageSize: numberRowSelected,
      },
    },
    useFilters,
    useSortBy
  );

  return (
    <div className="text-sm mt-4">
      <div className="flex justify-between items-center">
        <Dropdown
          numberRowSelected={numberRowSelected}
          setNumberRowSelected={setNumberRowSelected}
        />
        <Search filterData={filterData} />
      </div>
      <table
        {...getTableProps()}
        className="bg-white w-full border-collapse border text-sm"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-2 border"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border">
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="p-2 border">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="containerInfos-underTable flex justify-between">
        <div>
          Showing {rows.length > 0 ? rows[rows.length - 1].index + 1 : 0} of{' '}
          {filteredData.length} entries
          {filteredData.length !== listOfEmployees.length &&
            ` (filtered from ${listOfEmployees.length} total entries)`}
        </div>
        <CurrentPage page={page} setPage={setPage} />
      </div>
    </div>
  );
}
