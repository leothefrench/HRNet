import { useTable, Column, useSortBy } from 'react-table'
import { EmployeeData } from './FormCreateEmployee'

interface TableListEmployeesProps {
  listOfEmployees: EmployeeData[]
}

export const TableListEmployees: React.FC<TableListEmployeesProps> = ({listOfEmployees}) => {

  console.log(listOfEmployees)
 
  const columns: Column<EmployeeData>[] = [
    {
      Header: 'First Name',
      accessor: 'firstName'
    },
    {
      Header: 'Last Name',
      accessor: 'lastName'
    },
    {
      Header: 'Date Of Birth',
      accessor: 'dateOfBirth'
    },
    {
      Header: 'Start Date',
      accessor: 'startDate'
    },
    {
      Header: 'Street',
      accessor: 'street'
    },
    {
      Header: 'City',
      accessor: 'city'
    },
    {
      Header: 'State',
      accessor: 'state'
    },
    {
      Header: 'Zip Code',
      accessor: 'zipCode'
    },
    {
      Header: 'Department',
      accessor: 'department'
    },
  ]

  const  { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable ({
    columns,
    data: listOfEmployees
    },
    useSortBy
  )

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? column.isSortedDesc ? 'DESC' : 'ASC': ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}