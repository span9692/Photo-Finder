import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddPhotoForm from './AddPhotoForm';

function AddPhotoModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button class='add-photo-button' onClick={() => setShowModal(true)}>Add Photo</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <AddPhotoForm setShowModal={setShowModal}/>
            </Modal>
          )}
        </>
      );
}

export default AddPhotoModal;
