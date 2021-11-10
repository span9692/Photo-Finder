import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import BookingForm from './BookingForm'

function BookingModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button class='profile-buttons' onClick={() => setShowModal(true)}>Book</button>
            {showModal && (
                <Modal class='delete-modal' onClose={() => setShowModal(false)}>
                    <BookingForm />
                </Modal>
            )}
        </>
    )
}

export default BookingModal;
