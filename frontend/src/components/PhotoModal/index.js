import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeletePhoto from '../DeletePhotoModal';
import './photoModal.css'

function PhotoModal({photoId, url}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <img onClick={() => setShowModal(true)} className='image6' key={photoId} src={url} />
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <img className='image-modal' src={url} />
                    <DeletePhoto />
                </Modal>
            )}
        </>
    );
}

export default PhotoModal;
