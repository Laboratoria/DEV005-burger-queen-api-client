import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../assets/back.png';
import Api from '../../api_client/api';
import CardOrderStatus from '../../Components/cardOrderStatusWaiter/cardOrderStatus';
import ModalDelivered from '../../Components/modal/modalDelivered';
import LogoBurger from '../../Components/Logo/logo';
import './statusOrder.css'


const ViewOrder = () => {
    const token = localStorage.getItem('token');
    //las ordenes atendidas se almacenarian en setOrderDelivered
    const [orderDelivery, setOrderDelivery] = useState([]);
    // Abre modal de viewOrder
    const [showModalDelivered, setShowModalDelivered] = useState(false);
    //navega a waiter
    const navigate = useNavigate();


    //llamar a la api para traer las ordenes
    useEffect(() => {
        async function fetchGetOrder() {
            const result = await Api().fetchGetOrder({ token });
            setOrderDelivery(result.delivery);
            // console.log('Viendo order', result)
        }
        fetchGetOrder();
    }, [])

    //llamar a la api para editar los productos
    const changeStatus = async (order) => {
        // console.log('le di click, ')
        const result = await Api().changeStatus(order, "delivered", token);
        async function fetchGetOrder() {
            const result = await Api().fetchGetOrder({ token });
            setOrderDelivery(result.delivery);
            setShowModalDelivered(true);
        }
        fetchGetOrder();
        // console.log('estado', result)
    };


    const handleClickBack = () => {
        navigate('/waiter');
    };

    // cierra modal de cancel
    const cancel = () => {
        setShowModalDelivered(false);
    }

    return (
        <div className="global-container-waiter">
            <figure className="box-back" onClick={handleClickBack}>
                <img src={back} className="back" alt="back" />
            </figure>

            <LogoBurger />

            <div className="content-viewOrder">
                <h2 className='title-columns-pending'>Orders to deliver</h2>
                <CardOrderStatus orders={orderDelivery} changeStatus={changeStatus} showButton={true} text={'Delivered'} />
                {showModalDelivered && <ModalDelivered back={cancel} />}
            </div>
        </div>
    );
};

export default ViewOrder;