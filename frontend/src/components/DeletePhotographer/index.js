import React, {useState } from 'react';
import {Modal} from '../../context/Modal'
import DeletePhotographer from './DeletePhotographer'

function DeleteModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button class='profile-buttons' onClick={()=>setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal class='delete-modal' onClose={() => setShowModal(false)}>
                    <DeletePhotographer />
                </Modal>
            )}
        </>
    )
}

export default DeleteModal;
