import { TableListEmployees } from '../components/TableListEmployees'
import {useSelector} from 'react-redux'
import { RootState } from '../features/stores'
import { Link } from 'react-router-dom'

export const EmployeeList = () => {
  
  const employees = useSelector((state: RootState) => state.infoEmployee)

  return (
    <div className="px-12 my-4">
      <h1 className="text-2xl text-center font-medium mt-8">
        Current Employees
      </h1>
      <TableListEmployees listOfEmployees={employees} />
      <Link
        to="/"
        className="block mx-auto w-32 bg-blue-600 text-white hover:bg-blue-800 hover:text-white rounded-full py-2 px-4 text-center"
      >
        Home
      </Link>
    </div>
  );
} 