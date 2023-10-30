import { TableListEmployees } from '../components/TableListEmployees'
import {useSelector} from 'react-redux'
import { RootState } from '../features/stores'
import { Link } from 'react-router-dom'

export const EmployeeList = () => {
  
  const employees = useSelector((state: RootState) => state.infoEmployee)

  return (
    <div className='px-12 my-4'>
      <h1 className='text-2xl text-center font-medium mt-8'>Current Employees</h1>
      <TableListEmployees listOfEmployees={employees} />
      <Link to='/' className="block mx-auto text-blue-500 hover:text-blue-700 flex items-center justify-center">Home</Link>
    </div>
  )
} 