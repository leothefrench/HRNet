// import './formCreateEmployee.scss'
import { states } from './data/dataStates'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { Modal } from './plugins/ModalDialog'
import Select from 'react-select'
import { department } from './data/dataDepartment';
import { optionStates } from './data/dataOptionStates';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/reducerListEmployee';

/**
 * Cette interface définit la structure des données nécessaires à la création d'un nouvel employée.
 */
interface EmployeeData {
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  startDate: Date,
  street: string,
  city: string
  state: string,
  zipCode: string,
  department: string,
}

/**
 * Composant pour la création d'un employé
 * Ce composant permet de saisir les informations nécessaire à la création comme, le prénom, le nom, la date de naissance, etc ...
 * @returns {JSX.Element} Formulaire de création d'employé
 */
export const FormCreateEmployee = () => {

  const [dataEmployee, setDataEmployee] = useState<EmployeeData>({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    startDate: new Date(),
    street: '',
    city: '',
    state: '',
    zipCode: states[0].name,
    department: 'Sales'
    }
  )

  /**
   * Fonction permettant la gestion des informatiosn rentrées dans le formulaire
   */
  const handleChangeDataEmployee = (fieldName: keyof EmployeeData, value: string | Date) => {
    if(fieldName === 'dateOfBirth' || fieldName === 'startDate') {
     value = value instanceof Date ? value : new Date(value)
    }
    setDataEmployee({...dataEmployee, [fieldName]: value}) 
  }

  const [selectedDate, setSelectedDate]= useState(null) // Birth Date
  const [selectedStartDate, setSelectedStartDate]= useState(null) // 
  const [modalIsOpen, setModalIsOpen] = useState(false)

  // Création d'un objet newEmployee pour le reducer
  const newEmployee = {
    firstName: dataEmployee.firstName,
    lastName: dataEmployee.lastName,
    dateOfBirth: dataEmployee.dateOfBirth.toISOString(),
    startDate: dataEmployee.startDate.toISOString(),
    street: dataEmployee.street,
    city: dataEmployee.city,
    state: dataEmployee.state,
    zipCode: dataEmployee.zipCode,
    department: dataEmployee.department,
  }

  const dispatch =  useDispatch()
  
  const toggleModal = () => {
      dispatch(addEmployee(newEmployee))
      setModalIsOpen(!modalIsOpen)     
  }

  return (
    <div className="flex flex-col items-center justify-center w-full m-auto mt-4">
        <Link to='/employees' className="mb-4 text-blue-600 hover:text-blue-800">View Current Employees</Link>
        <h2 className="mb-2">Create Employee</h2>
        <form id="create-employee" className="w-full max-w-md mx-auto bg-white p-4 shadow-md rounded-lg">
            <label htmlFor="first-name" className="block mt-4">First Name</label>
            <input className="w-full p-2 border rounded" type="text" id="first-name" name="first-name"
             value={dataEmployee.firstName} onChange={(e) => handleChangeDataEmployee('firstName', e.target.value)} />

            <label htmlFor="last-name" className="block mt-4">Last Name</label>
            <input className="w-full p-2 border rounded" type="text" id="last-name" name="last-name" 
              value={dataEmployee.lastName} onChange={(e) => handleChangeDataEmployee('lastName', e.target.value)} />

            <label htmlFor="date-of-birth" className="block mt-4">Date of Birth</label>
            <DatePicker className="w-full p-2 border rounded" selected={selectedDate} onChange={date => setSelectedDate(date)} name="date-of-birth"/>

            <label htmlFor="start-date" className="block mt-4 ">Start Date</label>
            <DatePicker className="w-full p-2 border rounded" selected={selectedStartDate} onChange={startDate => setSelectedStartDate(startDate)} name="start-date"/>

            <fieldset className="address mt-4">
                <legend>Address</legend>

                <label htmlFor="street" className="block mt-4">Street</label>
                <input className="w-full p-2 border rounded" id="street" type="text" name="street" 
                  value={dataEmployee.street} onChange={(e) => handleChangeDataEmployee('street', e.target.value)}/>

                <label htmlFor="city" className="block mt-4">City</label>
                <input className="w-full p-2 border rounded" id="city" type="text" name="city" 
                  value={dataEmployee.city} onChange={(e) => handleChangeDataEmployee('city', e.target.value)} />
                  
                <label htmlFor="state" className="block mt-4">State</label>
                <Select options={optionStates} />
                
                <label htmlFor="zip-code" className="block mt-4">Zip Code</label>
                <input className="w-full p-2 border rounded" id="zip-code" type="number" name="zip-code"
                 value={dataEmployee.zipCode} onChange={(e) => handleChangeDataEmployee('zipCode', e.target.value)}/>
            </fieldset>

            <label htmlFor="department" className="block mt-4">Department</label>
            <Select options={department} />
            
        </form>
        <button className="bg-[#88cc14] hover:bg-[#8be966] text-white py-2 px-4 rounded mt-4" onClick={toggleModal}>Save</button>
        <Modal isOpen={modalIsOpen} handleClose={toggleModal} customText='Employee Created'/>
    </div>
  )
}