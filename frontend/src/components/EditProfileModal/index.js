import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import EditProfileForm from './EditProfileForm'


function EditProfileModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditProfileForm />
                </Modal>
            )}
        </>
    )
}

export default EditProfileModal;
