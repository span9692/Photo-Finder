import { useState } from 'react'
import { Modal } from '../../context/Modal'
import DeleteForm from "./DeleteForm";
import '../PhotoModal/photoModal.css'



function DeletePhoto ({photoId}) {
    const [showModal, setShowModal] = useState(false);

    return (

        <div id='deletephotomodal'>
          <button class='review-delete-button'onClick={() => setShowModal(true)}>Delete Photo</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <DeleteForm photoId={photoId}/>
            </Modal>
          )}
        </div>

      );
}

export default DeletePhoto;
