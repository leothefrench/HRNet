import './formCreateEmployee.scss'
import { states } from '../dataStates'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

/**
 * Cette interface définit la structure des données nécessaires à la création d'un nouvel employée.
 */
interface EmployeeData {
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  startDate: string,
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
export const FormCreateEmployee: React.FC = () => {

  const [dataEmployee, setDataEmployee] = useState<EmployeeData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: states[0].name,
    department: 'Sales'
    }
  )

  /**
   * Fonction permettant la gestion des informatiosn rentrées dans le formulaire
   * @param fieldName
   * @param value 
   */
  const handleChangeDataEmployee = (fieldName: keyof EmployeeData, value: string) => {
    setDataEmployee({...dataEmployee, [fieldName]: value}) 
  }

  const [selectedDate, setSelectedDate]= useState(null) // Birth Date
  const [selectedStartDate, setSelectedStartDate]= useState(null) // 

  return (
    <div className='container'>
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <form id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name"
             value={dataEmployee.firstName} onChange={(e) => handleChangeDataEmployee('firstName', e.target.value)} />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" 
              value={dataEmployee.lastName} onChange={(e) => handleChangeDataEmployee('lastName', e.target.value)} />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} name="date-of-birth"/>

            <label htmlFor="start-date">Start Date</label>
            <DatePicker selected={selectedStartDate} onChange={startDate => setSelectedStartDate(startDate)} name="start-date"/>

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" name="street" 
                  value={dataEmployee.street} onChange={(e) => handleChangeDataEmployee('street', e.target.value)}/>

                <label htmlFor="city">City</label>
                <input id="city" type="text" name="city" 
                  value={dataEmployee.city} onChange={(e) => handleChangeDataEmployee('city', e.target.value)} />

                <label htmlFor="state">State</label>
                <select name="state" id="state" 
                  value={dataEmployee.state} onChange={(e) => handleChangeDataEmployee('state', e.target.value)}>
                    {states.map((state, index) => (
                      <option key={index} value={state.name}>{state.name}</option>
                    ))}
                </select>

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" name="zip-code"
                 value={dataEmployee.zipCode} onChange={(e) => handleChangeDataEmployee('zipCode', e.target.value)}/>
            </fieldset>

            <label htmlFor="department">Department</label>
            <select name="department" id="department">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
        </form>

        <button type='submit'>Save</button>
    </div>
  )
}