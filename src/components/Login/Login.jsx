import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authProvider } from '../provider/AuthProvider';
const Login = () => {

    const [show, setShow] = useState(false);

    const { signInWithMailPassword } = useContext(authProvider);
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location);

    const from = location.state?.from?.pathname || '/';


    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithMailPassword(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                alert("Log in sucessfully")
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please LogIn</h2>
            <form onSubmit={handleLogIn}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <br />
                    <input className="input-field" type="email" name='email' required placeholder='email' />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <br />
                    <input className="input-field" type={show ? 'text' : "password"} name='password' required placeholder='Password' />
                    <p onClick={() => setShow(!show)}>
                        <small>
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>
                            }
                        </small>
                    </p>
                </div>
                <input className="btn-submit" type="submit" value='Login' />


            </form>
            <p className='another-reg'><small>Are you new To the Website? <Link to='/signup'>Please register !!</Link></small></p>
        </div>
    );
};

export default Login;