import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addPhotographer } from '../../store/photographer'
import './photographerForm.css';

const PhotographerForm = () => {
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory();
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [biography, setBiography] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [price, setPrice] = useState();
    const [errors, setErrors] = useState([]);

    const refresh = () => {
        setFirstName("");
        setLastName("");
        setProfilePic('');
        setBiography('');
        setCity('');
        setState('');
        setPrice();
        setErrors([]);

        history.push('/photographers')
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const newPhotographer = {
            firstName,
            lastName,
            profilePic,
            biography,
            city,
            state,
            userId: sessionUser.id,
            price
        };

        dispatch(addPhotographer({newPhotographer, refresh}))
            .then(() => refresh())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            });
        // history.push('/photographers')
    };

    return (
        <div>
            <br></br><br></br><br></br><br></br>
            <div className='listing-title'>Create Your Listing</div>
            <div className='form-container'>
                <div className='sidebar'></div>
                <div className='mainbar'>
                    <form className='photographer-form' onSubmit={onSubmit}>
                        <ul>
                            {errors.map((error, idx) => (
                                <li className='d5 error-message' key={idx}>{error}</li>
                            ))}
                        </ul>
                        <div className='d1 d2'>
                            <label className='d4' htmlFor='firstName'>First Name:</label>
                            <br></br>
                            <input
                                id='firstName'
                                type='text'
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                            />
                        </div>
                        <div className='d1 d2'>
                            <label className='d4' htmlFor='lastName'>Last Name:</label>
                            <br></br>
                            <input
                                id='lastName'
                                type='text'
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
                            />
                        </div>
                        <div className='d1 d2'>
                            <label className='d4' htmlFor='profilePic'>Profile Picture URL:</label>
                            <br></br>
                            <input
                                id='profilePic'
                                type='text'
                                onChange={(e) => setProfilePic(e.target.value)}
                                value={profilePic}
                            />
                        </div>
                        <div className='d1 d2'>
                            <label className='d4' htmlFor='biography'>Biography</label>
                            <br></br>
                            <textarea id='biography'
                                type='text'
                                onChange={(e) => setBiography(e.target.value)}
                                value={biography}></textarea>
                        </div>
                        <div className='d1 d2'>
                            <label className='d4' htmlFor='city'>City:</label>
                            <br></br>
                            <input
                                id='city'
                                type='text'
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                            />
                        </div>
                        <div className='d1 d2'>
                            <label className='d4' htmlFor='state'>State:</label>
                            <br></br>
                            <input
                                id='state'
                                type='text'
                                onChange={(e) => setState(e.target.value)}
                                value={state}
                            />
                        </div>
                        <div className='d1 d2'>
                            <label className='d4' htmlFor='price'>Price:</label>
                            <br></br>
                            <input
                                id='price'
                                type='integer'
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                            />
                        </div>
                        <div>
                            <button className='profile-buttons2' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='sidebar'></div>
            </div>
        </div>
    )
}

export default PhotographerForm
