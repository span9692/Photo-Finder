import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const demoLogin = async () => {
    const demoUser = { credential: 'nickv', password: 'password' }
    return dispatch(sessionActions.login(demoUser))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };


  return (
    <>
      <form class='modal-form' onSubmit={handleSubmit}>
        <div className='field5'>
          <ul class='no-bullet errorlogin'>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
        <div className='field5 field6'>
          <label>
            Username or Email
          </label>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </div>
        <div className='field5 field6'>
          <label>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='field7'>
          <button className='login-logout-button' type="submit">Log In</button>
          <button className='demologinbutton' onClick={demoLogin}>Demo Login</button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
