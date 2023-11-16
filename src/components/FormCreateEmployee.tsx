import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-confirm-modal-v1' // Import de mon module de NPM
// import Select from 'react-select'

import { states } from './data/dataStates';
import { optionStates } from './data/dataOptionStates';
import { department } from './data/dataDepartment';
import { addEmployee } from '../features/reducerListEmployee';
import { FormInputField } from './formComponents/FormInputField'
import { FormDatePicker } from './formComponents/FormDatePicker';
import { FormSelect } from './formComponents/FormSelect';

/**
 * Cette interface définit la structure des données nécessaires à la création d'un nouvel employé.
 */
export interface EmployeeData {
  firstName: string,
  lastName: string,
  dateOfBirth: Date | null,
  startDate: Date | null,
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
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    state: states[0].abbreviation,
    zipCode: '',
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

  const [selectedDate, setSelectedDate]= useState<Date | null>(null)
  const [selectedStartDate, setSelectedStartDate]= useState<Date | null>(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  // Création d'un objet newEmployee pour le reducer
  const newEmployee = {
    firstName: dataEmployee.firstName,
    lastName: dataEmployee.lastName,
    dateOfBirth: selectedDate ? selectedDate.toISOString() : null,
    startDate:  selectedStartDate ? selectedStartDate.toISOString() : null,
    street: dataEmployee.street,
    city: dataEmployee.city,
    state: dataEmployee.state,
    zipCode: dataEmployee.zipCode,
    department: dataEmployee.department,
  }

  const dispatch =  useDispatch()
  
  const toggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      console.log("Enregistrement de l'employé :", newEmployee);
      dispatch(addEmployee(newEmployee))
      setModalIsOpen(!modalIsOpen)      
  }

  const togglingModal = () => { setModalIsOpen(!modalIsOpen) }

  return (
    <div className="flex flex-col items-center justify-center w-full m-auto mt-4">
      <Link to="/employees" className="mb-4 text-blue-900 hover:text-blue-800">
        View Current Employees
      </Link>
      <h2 className="mb-2">Create Employee</h2>
      <form className="w-full max-w-md mx-auto bg-white p-4 shadow-md rounded-lg">
        <FormInputField
          label="First Name"
          value={dataEmployee.firstName}
          onChange={(e) =>
            handleChangeDataEmployee('firstName', e.target.value)
          }
        />
        <FormInputField
          label="Last Name"
          value={dataEmployee.lastName}
          onChange={(e) => handleChangeDataEmployee('lastName', e.target.value)}
        />

        <FormDatePicker
          label="Date of Birth"
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />

        <FormDatePicker
          label="Start Date"
          value={selectedStartDate}
          onChange={(startDate) => setSelectedStartDate(startDate)}
        />

        <fieldset className="address mt-4 border border-blue-900 p-4 rounded">
          <legend>Address</legend>

          <FormInputField
            label="Street"
            value={dataEmployee.street}
            onChange={(e) => handleChangeDataEmployee('street', e.target.value)}
          />
          <FormInputField
            label="City"
            value={dataEmployee.city}
            onChange={(e) => handleChangeDataEmployee('city', e.target.value)}
          />
          <FormSelect
            label='State'
            value={optionStates.find((opt) => opt.value === dataEmployee.state) ||
              null}
            options={optionStates}
            onChange={(selectedOption) => {
              if (selectedOption) {
                handleChangeDataEmployee('state', selectedOption.value);
              }
            }}
            getOptionLabel={(option) => option.label}
           />
          <FormInputField
            label="Zip Code"
            value={dataEmployee.zipCode}
            onChange={(e) =>
              handleChangeDataEmployee('zipCode', e.target.value)
            }
          />
        </fieldset>
        <FormSelect
          label='Departemnt'
          options={department}
          value={department.find((opt) => opt.value === dataEmployee.department) ||
            null
          }
          onChange={(selectedOption) => {
            if (selectedOption) {
              handleChangeDataEmployee('department', selectedOption.value);
            }
          }}
          getOptionLabel={(option) => option.label}
        />
      </form>
      <button
        className="bg-[#88cc14] hover:bg-[#8be966] py-2 px-4 rounded mt-4"
        type="submit"
        onClick={toggleModal}
      >
        Save
      </button>
      <Modal
        isOpen={modalIsOpen}
        handleClose={togglingModal}
        customText="Employee Created"
      />
    </div>
  );
}