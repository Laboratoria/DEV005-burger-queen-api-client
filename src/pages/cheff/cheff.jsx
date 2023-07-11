import React from 'react';
import { useState, useEffect } from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Icon from '../../assets/iconCheff.png';
import './cheff.css'
import CardListProductCheff from '../../Components/cardOrderCheff/cardListProductCheff'
import api from '../../api_client/api';


export default function Cheff() {

    let showButton = true

    //llamar a la api para editar los productos
    const [orderPending, setOrderPending] = useState([]);
    const [orderDelivery, setOrderDelivery] = useState([]);


    const token = localStorage.getItem('token');
    //llamar a la api para traer las ordenes
    useEffect(() => {
        async function fetchGetOrder() {
            const result = await api().fetchGetOrder({ token });
            setOrderPending(result.pending);
            setOrderDelivery(result.delivery);
            // console.log(result)
        }
        fetchGetOrder();
    }, [])

    // console.log(orderPending)

    // funcion click para mandar de pending a delivery
    const changeStatus = async (order) => {
        const result = await api().changeStatus(order, "delivery", token);
        async function fetchGetOrder() {
            const result = await api().fetchGetOrder({ token });
            setOrderPending(result.pending);
            setOrderDelivery(result.delivery);
        }
        fetchGetOrder();
    }


    return (
        <>
            <section className='global-container-cheff '>
                <header>
                    <div className='box-text-logout'>
                        <Logout text='Cheff' icon={Icon} />
                        <LogoBurger />
                    </div>
                </header>

                <main>
                    <div className='container-column-cheff container'>

                        <div className='first-column'>
                            <h2 className='title-columns-cheff'>Cooking orders</h2>
                            <CardListProductCheff orders={orderPending} changeStatus={changeStatus} showButton={showButton} text={'To atend'} />
                        </div>

                        <div className='second-column'>
                            <h2 className='title-columns-cheff'>Completed order</h2>

                            < CardListProductCheff orders={orderDelivery} showButton={false} />

                        </div>

                    </div>
                </main>

            </section>

        </>
    )
}