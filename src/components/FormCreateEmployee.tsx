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

  const toggleModal = () => {
      setModalIsOpen(!modalIsOpen)     
  }

  return (
    <div className="flex flex-col items-center justify-center bg-teal-500 w-1/2 m-auto">
        <Link to='/employees'>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee">
            <label htmlFor="first-name" className="block mt-4">First Name</label>
            <input className="rounded-sm" type="text" id="first-name" name="first-name"
             value={dataEmployee.firstName} onChange={(e) => handleChangeDataEmployee('firstName', e.target.value)} />

            <label htmlFor="last-name" className="block mt-4">Last Name</label>
            <input type="text" id="last-name" name="last-name" 
              value={dataEmployee.lastName} onChange={(e) => handleChangeDataEmployee('lastName', e.target.value)} />

            <label htmlFor="date-of-birth" className="block mt-4">Date of Birth</label>
            <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} name="date-of-birth"/>

            <label htmlFor="start-date" className="block mt-4 ">Start Date</label>
            <DatePicker selected={selectedStartDate} onChange={startDate => setSelectedStartDate(startDate)} name="start-date"/>

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street" className="block mt-4">Street</label>
                <input id="street" type="text" name="street" 
                  value={dataEmployee.street} onChange={(e) => handleChangeDataEmployee('street', e.target.value)}/>

                <label htmlFor="city" className="block mt-4">City</label>
                <input id="city" type="text" name="city" 
                  value={dataEmployee.city} onChange={(e) => handleChangeDataEmployee('city', e.target.value)} />
                  
                <label htmlFor="state" className="block mt-4">State</label>
                <Select options={optionStates} />
                
                <label htmlFor="zip-code" className="block mt-4">Zip Code</label>
                <input id="zip-code" type="number" name="zip-code"
                 value={dataEmployee.zipCode} onChange={(e) => handleChangeDataEmployee('zipCode', e.target.value)}/>
            </fieldset>

            <label htmlFor="department" className="block mt-4">Department</label>
            <Select options={department} />
            
        </form>
        <button onClick={toggleModal}>Save</button>
        <Modal isOpen={modalIsOpen} handleClose={toggleModal} customText='Employee Created'/>
    </div>
  )
}