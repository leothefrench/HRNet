import React from 'react'

type ModalProps = {
    isOpen: boolean,
    handleClose: () => void,
    customText?: string,
    // customStyles is provided for future customization but is not used in the current version of the component
    customStyles?: React.CSSProperties,
}

export const Modal: React.FC<ModalProps> = ({isOpen, handleClose, customText, customStyles}) => {

    const customTextValue = customText || 'Action confirmée'

    const modalStyles:React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        display: isOpen ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.7)',
        // ...customStyles,
    }

    const containerTextModalStyles:React.CSSProperties = {
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '400px',
        padding: '1rem',
        textAlign: 'center',
    }

    const h2Styles:React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
    }

    const buttonStyles:React.CSSProperties = {
        backgroundColor: 'green',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
    }

    return (
        <div style={modalStyles}>
            <div style={containerTextModalStyles}>
                <h2 style={h2Styles}>
                    {customTextValue}
                </h2>
                <button style={buttonStyles} onClick={handleClose}>X</button>
            </div>
        </div>
    )
}
