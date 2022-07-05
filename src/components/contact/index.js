import React, { useState } from 'react';
import { validateEmail } from '../../utils/validate';

function Contact () {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const { name, email, message } = formData;
    const [errorMessage, setErrorMessage] = useState('');

    function changeHandler(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Please use a valid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} must be filled out.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <main className='text-center'>
            <h1>Contact Me</h1>
            <p>
                email: <a href="mailto:erikrockenmeyer@gmail.com">erikrockenmeyer@gmail.com</a> <br />
                LinkedIn: <a href="https://www.linkedin.com/in/erik-rockenmeyer-6aa4a311a/">Erik Rockenmeyer</a> <br />
                github: <a href="https://github.com/erockenmeyer">erockenmeyer</a>
            </p>
            <form className='mb-2 mt-4' id="contact-form" onSubmit={submitHandler}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' onBlur={changeHandler} defaultValue={name}></input>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' onBlur={changeHandler} defaultValue={email}></input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name="message" rows='6' onBlur={changeHandler} defaultValue={message}></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </main>
    )
}

export default Contact;