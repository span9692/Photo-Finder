import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const history = useHistory();
    if (sessionUser) history.push('/')

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            });
    }
    return (
        <div>
            <nav class='nav-bar'>
                <h2 class='login-text'>Log In</h2>
            </nav>
            <div class='container'>
                <form onSubmit={handleSubmit} class='login-form'>
                    <ul class='errorMessage'>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div class='inputbox'>
                        <div class='signin-input'>
                            <label>
                                <input
                                    type="text"
                                    value={credential}
                                    onChange={(e) => setCredential(e.target.value)}
                                    placeholder="Username or Email"
                                    required
                                />
                            </label>
                        </div>
                        <div class='signin-input'>
                            <label>
                                <input
                                    type="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <button type="submit" class='signin-input'>Log In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginFormPage;
