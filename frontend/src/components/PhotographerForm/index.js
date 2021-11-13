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
                                placeholder='First name'
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
                                placeholder='Last name'
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
                                placeholder='https://example.jpg'
                                onChange={(e) => setProfilePic(e.target.value)}
                                value={profilePic}
                            />
                        </div>
                        <div className='d1 d2'>
                            <label className='d4' htmlFor='biography'>Biography</label>
                            <br></br>
                            <textarea id='biography'
                            className='edit-prof'
                                type='text'
                                placeholder='Say something about yourself...'
                                onChange={(e) => setBiography(e.target.value)}
                                value={biography}></textarea>
                        </div>
                        <div className='d1 d2'>
                            <label className='d4' htmlFor='city'>City:</label>
                            <br></br>
                            <input
                                id='city'
                                placeholder='San Francisco'
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
                                placeholder='CA'
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
                                placeholder='75'
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
            <div class='sean-icon'>
                <a className='linkedinposition' href="https://github.com/span9692" target="_blank">
                    <img className='github' src="https://res.cloudinary.com/photofinder/image/upload/v1636674658/GitHub-Mark-120px-plus_txoi2x.png" />
                </a>
                <a className='linkedinposition' href="https://www.linkedin.com/in/sean-pan-395a4593/" target="_blank">
                    <img className='linkedin' src="https://res.cloudinary.com/photofinder/image/upload/v1636675007/linkedin-logo-png-2025_p0gjab.png" />
                </a>
            </div>
        </div>
    )
}

export default PhotographerForm
