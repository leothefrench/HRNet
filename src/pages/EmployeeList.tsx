import { TableListEmployees } from '../components/TableListEmployees'
import {useSelector} from 'react-redux'
import { RootState } from '../features/stores'

export const EmployeeList = () => {

  const employees = useSelector((state: RootState) => state.infoEmployee)

  return (
    <>
      <h1>Employees List</h1>
      <TableListEmployees listOfEmployees={employees} />
    </>
  )
} 