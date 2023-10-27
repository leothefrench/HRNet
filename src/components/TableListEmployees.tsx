import * as React from 'react';
import { useTable, Column, useSortBy, useFilters} from 'react-table'
import { Dropdown } from './Dropdown';
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

  console.log(listOfEmployees)

  const [searchText, setSearchText] = React.useState('');
  const [numberRowSelected, setNumberRowSelected] = React.useState(10);
  const [filteredData, setFilteredData] = React.useState(listOfEmployees)

  const filterData = (value: string) => { 
    setSearchText(value)

    const updatedFilterData = listOfEmployees.filter((employee) => {
      return (
        employee.firstName.toLowerCase().includes(value.toLowerCase())
      )
    })
    setFilteredData(updatedFilterData)
  }

  const columns: Column<Employee>[] = React.useMemo(
    () => [
      {
        Header: (
          <>
            First Name{" "}
              <span className="arrow-up">
                🔼
              </span>
              <span className="arrow-down">
                🔽
              </span>
          </>
        ),
        accessor: 'firstName',
        sortType: 'alphanumeric',
      },
      {
        Header: (
          <>
            Last Name{" "}
            <span className="arrow-up">
              🔼
            </span>
            <span className="arrow-down">
              🔽
            </span>
          </>
        ),
        accessor: 'lastName',
        sortType: 'alphanumeric',
      },
      {
        Header: (
          <>
            Date Of Birth{" "}
            <span className="arrow-up">
              🔼
            </span>
            <span className="arrow-down">
              🔽
            </span>
          </>
        ),
        accessor: 'dateOfBirth',
        sortType: 'alphanumeric',
        Cell: ({value}) => {
          const formattedDate = value ? new Date(value).toLocaleDateString() : ''
          return formattedDate
        }
      },
      {
        Header:  (
          <>
            Start Date{" "}
            <span className="arrow-up">
              🔼
            </span>
            <span className="arrow-down">
              🔽
            </span>
          </>
        ),
        accessor: 'startDate',
        sortType: 'alphanumeric',
        Cell: ({value}) => {
          const formattedDate = value ? new Date(value).toLocaleDateString() : ''
          return formattedDate
        }
      },
      {
        Header: (
          <>
          First Name{" "}
            <span className="arrow-up">
              🔼
            </span>
            <span className="arrow-down">
              🔽
            </span>
        </>
        ),
        accessor: 'street',
        sortType: 'alphanumeric',
      },
      {
        Header: (
          <>
            City{" "}
            <span className="arrow-up">
              🔼
            </span>
            <span className="arrow-down">
              🔽
            </span>
          </>
        ),
        accessor: 'city',
        sortType: 'alphanumeric',
      },
      {
        Header: (
          <>
            State{" "}
            <span className="arrow-up">
              🔼
            </span>
            <span className="arrow-down">
              🔽
            </span>
          </>
        ),
        accessor: 'state',
        sortType: 'alphanumeric',
      },
      {
        Header: (
          <>
            Zip Code{" "}
            <span className="arrow-up">
              🔼
            </span>
            <span className="arrow-down">
              🔽
            </span>
          </>
        ),
        accessor: 'zipCode',
        sortType: 'alphanumeric',
      },
      {
        Header: (
          <>
            Department{" "}
            <span className="arrow-up">
              🔼
            </span>
            <span className="arrow-down">
              🔽
            </span>
          </>
        ),
        accessor: 'department',
        sortType: 'alphanumeric',
      },
    ],
    []
  )

  // const data = React.useMemo(() => listOfEmployees, [listOfEmployees])
  const data = React.useMemo(() => filteredData, [filteredData])

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
      },
    },
    useFilters,
    useSortBy,
  )
  return (
    <div>
    <Dropdown numberRowSelected={numberRowSelected} setNumberRowSelected={setNumberRowSelected} filterData={filterData} />
    <table {...getTableProps()} className="w-full border-collapse border">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className="p-2 border">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} className="border">
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} className="p-2 border">
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
  )
}
