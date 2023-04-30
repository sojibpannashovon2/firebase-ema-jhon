import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { authProvider } from '../provider/AuthProvider';
import { clear } from 'localforage';
const SignUp = () => {

    const [match, setMatch] = useState(null);

    const { createUser } = useContext(authProvider);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password != confirm) {
            setMatch("Password did not matched !!!")
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                alert("Registration Successfully !!")
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Sign-up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <br />
                    <input className="input-field" type="email" name='email' required placeholder='email' />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <br />
                    <input className="input-field" type="password" name='confirm' required placeholder='confirm your password' />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Confirm Password</label>
                    <br />
                    <input className="input-field" type="password" name='password' required placeholder='Password' />
                </div>
                <input className="btn-submit" type="submit" value='Register' />


            </form>
            <p className='another-reg'><small>Already have an account? <Link to='/login'>Log-in Now !!</Link></small></p>
            <p className='another-reg2'><small>{match}</small></p>
        </div>
    );
};

export default SignUp;