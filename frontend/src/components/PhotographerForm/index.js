import { useState, useEffect } from 'react';

function PhotographerForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [role, setRole] = useState('');
    const [biography, setBiography] = useState('');
    const [subscribe, setSubscribe] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    const validate = () => {
        const validationErrors = [];
        if (!name) validationErrors.push('Please provide a Name');
        if (!email) validationErrors.push('Please enter an email');
        if (!phone) validationErrors.push('Please enter a phone number');
        if (!biography) validationErrors.push('Please enter a biography')
        return validationErrors;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (errors.length > 0) return setValidationErrors(errors);

        const userInfo = {
            name,
            email,
            phone,
            phoneType,
            role,
            biography,
            subscribe
        };
        console.log(userInfo);
        setName('');
        setEmail('');
        setPhone('');
        setPhoneType('');
        setRole('');
        setBiography('');
        setSubscribe('');
        setValidationErrors([]);
    };

    return (
        <div>
            {validationErrors.length > 0 && (
                <div>
                    The following errors were found:
                    <ul>
                        {validationErrors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                </div>
            )}
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                        id='name'
                        type='text'
                    // onChange={(e)=>}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        id='email'
                        type='text'
                    />
                </div>
                <div>
                    <select name='phoneType'>
                        <option value='Home'>Home</option>
                        <option value='Work'>Work</option>
                        <option value='Mobile'>Mobile</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='phone'>Phone:</label>
                    <input
                        id='phone'
                        type='text'
                    />
                </div>
                <div>
                    <input type='radio' id='instructor' name='button' />
                    <label htmlFor='instructor'>Instructor</label>
                    <input type='radio' id='student' name='button' />
                    <label htmlFor='student'>Student</label>
                </div>
                <div>
                    <label htmlFor='biography'>Biography</label>
                    <textarea id='biography'></textarea>
                </div>
                <div>
                    <input type='checkbox' id='checkbox' ></input>
                    <label forHtml='checkbox'>Subscribe for email notifications!</label>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PhotographerForm
