import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addPhoto } from '../../store/photos'
import './addPhoto.css'

function AddPhotoForm({setShowModal}) {
    const [url, setUrl] = useState('');
    const [type, setType] = useState('wedding');
    const dispatch = useDispatch();
    const {photographerId} = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();

        const newPhoto = {
            portfolioId: +photographerId,
            url,
            type
        }

        await dispatch(addPhoto(newPhoto));
        setShowModal(false)
    }

    return (
        <div className='box1'>
            <br></br>
            <div>
                <form className='modal-form' onSubmit={onSubmit}>
                    <br></br>
                    <div className='formfield1'>
                        <label htmlFor='url'>Image URL: </label>
                        <input
                            className='imageurl-width'
                            id='url'
                            type='text'
                            onChange={(e)=> setUrl(e.target.value)}
                            value={url}
                        />
                    </div>
                    <div className='formfield1'>
                        <label htmlFor='type'>Select Type:</label>
                        <select name='type' id='type-select'  onChange={(e)=> setType(e.target.value)}>
                            <option value='wedding'>Wedding</option>
                            <option value='maternal'>Maternal</option>
                            <option value='family'>Family</option>
                            <option value='adventure'>Adventure</option>
                            <option value='wedding'>Other</option>
                        </select>
                    </div>
                    <div>
                        <button className='profile-buttons1'>Add Photo</button>
                    </div>
                    <br></br>
                </form>
            </div>
        </div>
    )
}

export default AddPhotoForm;
