import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../api_client/api';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import CardProductAdmin from '../../Components/cardsAdministrator/cardsProductAdmin';
import ModalAddProduct from '../../Components/modal/modalAddProduct';
import ModalAddStaff from '../../Components/modal/modalAddStaff';
import ModalDeleteProduct from '../../Components/modal/modalDeleteProduct';
import ModalDeleteStaff from '../../Components/modal/modalDeleteStaff';
import ModalEditProduct from '../../Components/modal/modalEditProduct';
import ModalEditStaff from '../../Components/modal/modalEditStaff';
import Icon from '../../assets/iconAdmin.png';
import IconAdd from '../../assets/addProduct.png';
import AddStaff from '../../assets/addStaff.png';
import './administrator.css'


export default function Administrator() {
    const token = localStorage.getItem('token');

    //muestra peoductos o staff
    const [mostrarProducts, setMostrarProducts] = useState('Product');
    const [isActive, setIsActive] = useState(true);
    const handleClick = (value) => {
        setMostrarProducts(value);
        //activa el color del botton 
        if (value === 'Product') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    // muestra modal para añadir produsct/staff
    const [showModalAddProduct, setShowModalAddProduct] = useState(false);
    const handleClickModalAddProduct = () => {
        setShowModalAddProduct(true);
    }
    const [showModalAddStaff, setShowModalAddStaff] = useState(false);
    const handleClickModalAddStaff = () => {
        setShowModalAddStaff(true);
    }

    // muestra modal para eliminar product/staff
    const [showModalDeleteProduct, setShowModalDeleteProduct] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const [showModalDeleteStaff, setShowModalDeleteStaff] = useState(false);
    const [staffToDelete, setStaffToDelete] = useState(null);

    const handleClickDelete = (product) => {
        setShowModalDeleteProduct(true);
        setShowModalDeleteStaff(true)
        setProductToDelete(product);
        setStaffToDelete(product)
    }

    //muestra modal para editar product/staff
    const [showModalEditProduct, setShowModalEditProduct] = useState(false);
    const [productEdit, setProductEdit] = useState(null);

    const [showModalEditStaff, setShowModalEditStaff] = useState(false);
    const [staffEdit, setStaffEdit] = useState(null);

    const handleClickEdit = (product) => {
        setShowModalEditProduct(true);
        setProductEdit(product);

        setShowModalEditStaff(true)
        setStaffEdit(product)
    }

    //cierra modal
    const cancel = () => {
        setShowModalAddProduct(false);
        setShowModalAddStaff(false);
        setShowModalDeleteProduct(false);
        setShowModalDeleteStaff(false);
        setShowModalEditProduct(false);
        setShowModalEditStaff(false);
    }

    const [userAdmin, setUserAdmin] = useState([]);
    const [userWaiter, setUserWaiter] = useState([]);
    const [userCheff, setUserCheff] = useState([]);
    //llamar a la api para traer a los usuarios
    useEffect(() => {
        async function fetchShowUsers() {
            const result = await api().fetchShowUsers({ token });
            setUserAdmin(result.admin);
            setUserWaiter(result.waiter);
            setUserCheff(result.cheff);
        }
        fetchShowUsers();
    }, [showModalAddStaff, showModalEditStaff])

    //llama a la api para traer los productos
    const [breakfasts, setBreakfasts] = useState([])
    const [lunches, setLunches] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            const result = await api().fetchProducts({ token });
            setBreakfasts(result.breakfasts);
            setLunches(result.lunches);
        }
        fetchProducts();
    }, [showModalAddProduct, showModalEditProduct])





    return (
        <>
            <div className='global-container-Admi'>
                <header>
                    <div className='box-text-logout'>
                        <Logout text='Administrator' icon={Icon} />
                    </div>
                    <LogoBurger />
                </header>

                <main >

                    <section className='content-general-products container'>

                        <div>
                            <div className='content-buttons'>
                                <button
                                    id='product'
                                    onClick={() => handleClick('Product')}
                                    className={`btn-product ${isActive && 'active'}`}>Product</button>
                                <button
                                    id='staff'
                                    onClick={() => handleClick('Staff')}
                                    className={`btn-staff ${!isActive && 'active'}`}>Staff</button>
                            </div>
                            {mostrarProducts === "Product" ?
                                <> <div className='content-add' >
                                    <button
                                        id='addProduct'
                                        onClick={handleClickModalAddProduct}
                                        className='btn-addProduct' >
                                        <img src={IconAdd} className='icon-add-product' alt="add-product" />Add product</button></div>
                                    {showModalAddProduct && <ModalAddProduct cancel={cancel} />}

                                    <div>
                                        <h3 className='rolTitle'>Breakfasts</h3>
                                        <ul className='content-cards-products'>
                                            <CardProductAdmin products={breakfasts} handleClickDeleteProduct={handleClickDelete} handleClickEdit={handleClickEdit} />
                                            {showModalDeleteProduct &&
                                                <ModalDeleteProduct product={productToDelete} cancel={cancel} setBreakfasts={setBreakfasts} setLunches={setLunches} />}
                                            {showModalEditProduct &&
                                                <ModalEditProduct product={productEdit} cancel={cancel} setBreakfasts={setBreakfasts} setLunches={setLunches} />}
                                        </ul>

                                        <h3 className='rolTitle'>Lunches</h3>
                                        <ul className='content-cards-products'>
                                            <CardProductAdmin products={lunches} handleClickDeleteProduct={handleClickDelete} handleClickEdit={handleClickEdit} />

                                        </ul>
                                    </div></> :
                                <><div className='content-add'>
                                    <button
                                        id='addProduct'
                                        onClick={handleClickModalAddStaff}
                                        className='btn-addProduct' >
                                        <img src={AddStaff} className='icon-add-staff' alt="add-staff" />Add staff</button></div>
                                    {showModalAddStaff && <ModalAddStaff cancel={cancel} />}

                                    <div>
                                        <h3 className='rolTitle'>Waiter</h3>
                                        <ul className='content-cards-products'>
                                            <CardProductAdmin products={userWaiter} handleClickDeleteProduct={handleClickDelete} handleClickEdit={handleClickEdit} />
                                            {showModalDeleteStaff && <ModalDeleteStaff user={staffToDelete} cancel={cancel} setUserAdmin={setUserAdmin} setUserWaiter={setUserWaiter} setUserCheff={setUserCheff} />}
                                            {showModalEditStaff && <ModalEditStaff user={staffEdit} cancel={cancel} setUserAdmin={setUserAdmin} setUserWaiter={setUserWaiter} setUserCheff={setUserCheff} />}
                                        </ul>

                                        <h3 className='rolTitle'>Chef</h3>
                                        <ul className='content-cards-products'>
                                            <CardProductAdmin products={userCheff} handleClickDeleteProduct={handleClickDelete} handleClickEdit={handleClickEdit} />
                                        </ul>

                                        <h3 className='rolTitle'>Administrator</h3>
                                        <ul className='content-cards-products'>
                                            <CardProductAdmin products={userAdmin} handleClickDeleteProduct={handleClickDelete} handleClickEdit={handleClickEdit} />
                                        </ul>
                                    </div></>
                            }

                        </div>
                    </section>

                </main>
            </div>
        </>
    );
}
