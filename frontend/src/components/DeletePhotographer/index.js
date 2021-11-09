import React, {useState } from 'react';
import {Modal} from '../../context/Modal'
import DeletePhotographer from './DeletePhotographer'

function DeleteModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={()=>setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeletePhotographer />
                </Modal>
            )}
        </>
    )
}

export default DeleteModal;
