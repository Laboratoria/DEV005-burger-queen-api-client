import React from 'react';
import { useNavigate } from 'react-router-dom';
import out from '../../assets/out.png';
import './logout.css'

const Logout = ({ text, icon }) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        navigate('/');
    };

    return (
        <div className='btn-logout-container'>
            <figure className='box-content'>

                <div className='box-icon'>
                    <img src={icon} className='icon-waiter' alt="" />
                    <p className='text-waiter'>{text}</p>
                </div>

                <div className='box-logout' onClick={logout}>
                    <img src={out} className='out' alt="logo" />
                    <p className='text-out'>Logout</p>
                </div>

            </figure>
        </div>
    );
};

export default Logout;