import { TableListEmployees } from '../components/TableListEmployees'
import {useSelector} from 'react-redux'

export const EmployeeList = () => {

  const employees = useSelector((state) => state.infoEmployee)

  return (
    <>
      <h1>Employees List</h1>
      <TableListEmployees employees={employees} />
    </>
  )
}