import React, { useState } from 'react'
import Layout from '../../components/layout/layout'
import Card from '../../components/UI/card/card'
import s from '../loginPage/loginPage.module.css'
import { signup } from '../../actions/auth.actions'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dipatch = useDispatch();
    const auth = useSelector(state => state.auth);
    

    const registerUser = (e) => {
        e.preventDefault();
        const user = {
            firstName, lastName, email, password
        }

        dipatch(signup(user))
    }

    if (auth.authenticated) {
        return <Redirect to={'/'} />
    };

    return (

        <Layout>
            <div className={s.registerContainer}>

                <Card>
                    <form onSubmit={registerUser}>
                        <h3>Sign Up</h3>
                        <input
                            name='firstName'
                            type='text'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='First Name' />

                        <input
                            name='lastName'
                            type='text'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Last Name' />

                        <input
                            name='email'
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email' />

                        <input
                            name='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password' />

                        <div>
                            <button>Sign Up</button>
                        </div>
                    </form>
                </Card>
            </div>
        </Layout>
    )

}

export default RegisterPage