import react from '@astrojs/react'
import { useState } from 'react'
import ReactModal from 'react-modal';



const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Open</button>
            
        </div>
    )
}