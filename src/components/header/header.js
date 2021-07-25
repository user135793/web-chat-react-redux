import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { logout } from '../../actions/auth.actions';
import s from './header.module.css';

const Header = (props) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    //const logout = (props) => {
    //    dispatch(logout())    
    //}

    return (
        <header className={s.header}>
            <div style={{ display: 'flex' }}>
                <div className={s.logo}>Web Messenger</div>

                {
                    !auth.authenticated ?
                        <ul className={s.leftMenu}>
                            <li><NavLink to={'login'}>Login</NavLink></li>
                            <li><NavLink to={'signup'}>Sign Up</NavLink></li>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                        </ul> : null
                }


            </div>
            <div style={{ margin: '20px', color: '#fff', fontWeight: 'bold' }}>
                {auth.authenticated ? `Hi ${auth.firstName} ${auth.lastName}` : ''}
            </div>
            <ul className={s.menu}>
                {
                    auth.authenticated ?
                        <li>
                            <Link to={'#'} onClick={() => {
                                dispatch(logout(auth.uid));
                            }}>Logout</Link>
                        </li> : null
                }

            </ul>
        </header>
    )

}

export default Header