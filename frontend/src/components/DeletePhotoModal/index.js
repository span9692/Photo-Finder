import { useState } from 'react'
import { Modal } from '../../context/Modal'
import DeleteForm from "./DeleteForm";



function DeletePhoto () {
    const [showModal, setShowModal] = useState(false);

    return (

        <>
          <button class='review-delete-button' onClick={() => setShowModal(true)}>Delete Photo</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <DeleteForm />
            </Modal>
          )}
        </>

      );
}

export default DeletePhoto;
