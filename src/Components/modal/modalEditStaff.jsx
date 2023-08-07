import React from 'react';
import { useState } from 'react';
import close from '../../assets/close.png';
import './modalAddProduct.css'
import '../modal/editProductStaff.css'
import api from '../../api_client/api';

const ModalEditStaff = ({ cancel, user }) => {

    const token = localStorage.getItem('token');
    // console.log('usuario--contenido: ', user)
    //llamo a la api para editar producto
    const [id, setId] = useState(user.id)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState(user.password)
    const [role, setRole] = useState(user.role)


    const fetchEditStaff = async (e) => {
        e.preventDefault()

        await api().fetchEditStaff(token, {
            email,
            id,
            role,
            password,
        });
        cancel();
    }

    return (
        <div className="modal-add">
            <div className="modal-content-add">
                <p className="title-add" > Edit staff</p>
                <figure className="box-close" onClick={cancel}>
                    <img src={close} className="close" alt="close" />
                </figure>

                <form className='content-item' onSubmit={fetchEditStaff}>
                    <div className='item' >
                        <label>Email:</label>
                        <input className="inp-modal inp-modal-edit" defaultValue={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="example@example.com" />
                    </div>



                    <div className='item'>
                        <label>Password: </label>
                        <input className="inp-modal" onChange={(e) => setPassword(e.target.value)} type="text" placeholder="********" />
                    </div>

                    <div className='item item-text-role'>
                        <label className='text-role'>Role:</label>
                        <select className="inp-select" name="select" defaultValue={role} onChange={(e) => setRole(e.target.value)} >
                            <option value="waiter">Waiter</option>
                            <option value="cheff">Cheff</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <input type="submit" className="btn-add" value="Save" />
                </form>

            </div>
        </div>
    );
};

export default ModalEditStaff;