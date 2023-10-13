import { useDispatch } from 'react-redux'
import { addEmployee } from '../features/reducerListEmployee'
/**
 * Modal affichant la confirmation de la création de la fiche employée suite au clique sur le bouton save du formulaire de création
 * @returns {JSX.Element}
 */
export const ConfirmationCreateEmployee = ({employeeData, showConfirmation, setShowConfirmation}) => {

    const dispatch = useDispatch()

    const handleSaveClick = () => {
        dispatch(addEmployee(employeeData))
        setShowConfirmation(false)
    }

  return (
    <>
        {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="fixed inset-0 w-screen h-screen bg-gray-700 bg-opacity-70"></div>
            <div className="flex items-center justify-between absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-white w-1/2 h-16 rounded-md">
                <p className="mx-4">Employee Created!</p>
                <button className="px-10 py-20 rounded-md block mt-100 bg-gray-500" 
                    onClick={handleSaveClick}>X</button>
            </div>
        </div>
        )}
    </>
  )
} 