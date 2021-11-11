import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReview from './DeleteReview';



function DeleteReviewModal({reviewId}) {
  const [showModal, setShowModal] = useState(false);

  return (

    <>
      <button class='review-delete-button' onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteReview reviewId={reviewId}/>
        </Modal>
      )}
    </>

  );
}

export default DeleteReviewModal;
