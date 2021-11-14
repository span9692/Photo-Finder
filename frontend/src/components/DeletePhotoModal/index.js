import { useState } from 'react'
import { Modal } from '../../context/Modal'
import DeleteForm from "./DeleteForm";
import '../PhotoModal/photoModal.css'



function DeletePhoto ({photoId}) {
    const [showModal, setShowModal] = useState(false);

    return (

        <>
          <button class='review-delete-button'onClick={() => setShowModal(true)}>Delete Photo</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <DeleteForm photoId={photoId}/>
            </Modal>
          )}
        </>

      );
}

export default DeletePhoto;
