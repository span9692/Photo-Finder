import React, {useState } from 'react';
import {Modal} from '../../context/Modal'
import DeleteBooking from './DeleteBooking'

function DeleteBook({id}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button class='profile-buttons' onClick={()=>setShowModal(true)}>Cancel</button>
            {showModal && (
                <Modal class='delete-modal' onClose={() => setShowModal(false)}>
                    <DeleteBooking deleteId={id}/>
                </Modal>
            )}
        </>
    )
}

export default DeleteBook;
