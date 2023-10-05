import './modalConfirmationCreateEmployee.scss'
import { useState } from 'react'

/**
 * Modal affichant la confirmation de la création de la fiche employée suite au clique sur le bouton save du formulaire de création
 * @returns {JSX.Element}
 */
export const ModalConfirmationCreateEmployee = () => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)      
    }

  return (
    <>
        <button type="submit" className='btn-modal'onClick={toggleModal}>Save</button>
        {modal && (
        <div className="modal">
            <div className="modal__overlay"></div>
            <div className="modal__content">
                <p className='modal__content__para'>Création de  la fiche employée créé</p>
                <button className='modal__content__close-btn' onClick={toggleModal}>X</button>
            </div>
        </div>
        )}

    </>
  )
}