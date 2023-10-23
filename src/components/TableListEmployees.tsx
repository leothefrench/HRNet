import * as React from 'react';
import { useTable, Column} from 'react-table'

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

  // const columns: Column<Employee>[] = [
  //   {
  //     Header: 'First Name',
  //     accessor: 'firstName',
  //   },
  //   {
  //     Header: 'Last Name',
  //     accessor: 'lastName',
  //   },
  //   {
  //     Header: 'Date of Birth',
  //     accessor: 'dateOfBirth',
  //   },
  //   {
  //     Header: 'Start Date',
  //     accessor: 'startDate',
  //   },
  //   {
  //     Header: 'Street',
  //     accessor: 'street',
  //   },
  //   {
  //     Header: 'City',
  //     accessor: 'city',
  //   },
  //   {
  //     Header: 'State',
  //     accessor: 'state',
  //   },
  //   {
  //     Header: 'Zip Code',
  //     accessor: 'zipCode',
  //   },
  //   {
  //     Header: 'Department',
  //     accessor: 'department',
  //   },
  // ]

  // const data = React.useMemo(() => listOfEmployees, [listOfEmployees])

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  // } = useTable({
  //   columns,
  //   data,
  // })

  // return (
  //   <table {...getTableProps()} className="w-full border-collapse border">
  //     <thead>
  //       {headerGroups.map(headerGroup => (
  //         <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
  //           {headerGroup.headers.map(column => (
  //             <th {...column.getHeaderProps()} className="p-2 border">
  //               {column.render('Header')}
  //             </th>
  //           ))}
  //         </tr>
  //       ))}
  //     </thead>
  //     <tbody {...getTableBodyProps()}>
  //       {rows.map(row => {
  //         prepareRow(row)
  //         return (
  //           <tr {...row.getRowProps()} className="border">
  //             {row.cells.map(cell => {
  //               return (
  //                 <td {...cell.getCellProps()} className="p-2 border">
  //                   {cell.render('Cell')}
  //                 </td>
  //               )
  //             })}
  //           </tr>
  //         )
  //       })}
  //     </tbody>
  //   </table>
  // )
}
